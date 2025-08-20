// src/pages/Cover.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* params */
type ShaderParams = { patternScale: number; refraction: number; edge: number; patternBlur: number; liquid: number; speed: number; };
const defaultParams: ShaderParams = { patternScale: 2, refraction: 0.015, edge: 1, patternBlur: 0.005, liquid: 0.07, speed: 0.3 };

/* supersampled text mask */
function makeTextImageData({ text, px, padding, ss = Math.max(2, (window.devicePixelRatio || 1) * 1.5) }:{
  text:string; px:number; padding:number; ss?:number;
}): ImageData {
  const big = document.createElement("canvas");
  const bctx = big.getContext("2d", { willReadFrequently: true })!;
  const font = `900 ${px * ss}px Inter, ui-sans-serif, system-ui, Arial`;
  bctx.font = font;

  const tm = bctx.measureText(text);
  const ascent = Math.ceil(tm.actualBoundingBoxAscent || px * ss * 0.9);
  const descent = Math.ceil(tm.actualBoundingBoxDescent || px * ss * 0.2);
  const wBig = Math.ceil(tm.width) + Math.ceil(padding * ss) * 2;
  const hBig = ascent + descent + Math.ceil(padding * ss) * 2;

  big.width = wBig; big.height = hBig;

  bctx.fillStyle = "#fff"; bctx.fillRect(0, 0, wBig, hBig);
  bctx.fillStyle = "#000"; bctx.font = font; bctx.textAlign = "center"; bctx.textBaseline = "alphabetic";
  bctx.translate(wBig / 2, Math.ceil(padding * ss) + ascent);
  bctx.filter = "blur(0.2px)";
  bctx.fillText(text, 0, 0);

  const small = document.createElement("canvas");
  const sw = Math.round(wBig / ss), sh = Math.round(hBig / ss);
  small.width = sw; small.height = sh;
  const sctx = small.getContext("2d", { willReadFrequently: true })!;
  sctx.imageSmoothingEnabled = true; sctx.imageSmoothingQuality = "high";
  sctx.drawImage(big, 0, 0, wBig, hBig, 0, 0, sw, sh);
  return sctx.getImageData(0, 0, sw, sh);
}

/* shaders */
const vs = `#version 300 es
precision mediump float; in vec2 a_position; out vec2 vUv;
void main(){ vUv=.5*(a_position+1.); gl_Position=vec4(a_position,0.,1.); }`;

const fs = `#version 300 es
precision mediump float;
in vec2 vUv; out vec4 fragColor;
uniform sampler2D u_image_texture;
uniform float u_time,u_ratio,u_img_ratio,u_patternScale,u_refraction,u_edge,u_patternBlur,u_liquid;
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}
float snoise(vec2 v){
 const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
 vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
 vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
 vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=mod289(i);
 vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
 vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.); m*=m; m*=m;
 vec3 x=2.*fract(p*vec3(C.www))-1.; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5); vec3 a0=x-ox;
 m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
 vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw; return 130.*dot(m,g);
}
vec2 rot(vec2 p,float a){return mat2(cos(a),sin(a),-sin(a),cos(a))*p;}
vec2 imgUv(vec2 uv,float ratio,float ir){
  vec2 u=uv; u.y=1.-u.y; u-=.5; if(ratio>ir) u.x*=ratio/ir; else u.y*=ir/ratio; u+=.5; return u;
}
float frame(vec2 uv,float w){
  float a=smoothstep(0.,w,uv.x)*smoothstep(1.,1.-w,uv.x);
  a*=smoothstep(0.,w,uv.y)*smoothstep(1.,1.-w,uv.y); return a;
}
float ch(float c1,float c2,float p,vec3 w,float blur,float b){
  float ch=c2,bd=0.,bl=blur;
  ch=mix(ch,c1,smoothstep(0.,bl,p));
  bd=w.x; ch=mix(ch,c2,smoothstep(bd-bl,bd+bl,p));
  b=smoothstep(.2,.8,b);
  bd=w.x+.4*(1.-b)*w.y; ch=mix(ch,c1,smoothstep(bd-bl,bd+bl,p));
  bd=w.x+.5*(1.-b)*w.y; ch=mix(ch,c2,smoothstep(bd-bl,bd+bl,p));
  bd=w.x+w.y; ch=mix(ch,c1,smoothstep(bd-bl,bd+bl,p));
  float t=(p-w.x-w.y)/w.z; float grad=mix(c1,c2,smoothstep(0.,1.,t));
  ch=mix(ch,grad,smoothstep(bd-bl,bd+bl,p)); return ch;
}
void main(){
  vec2 uv=vUv; uv.x*=u_ratio; float diag=uv.x-uv.y, t=.001*u_time;
  vec2 iuv=imgUv(uv,u_ratio,u_img_ratio);
  float edge=texture(u_image_texture,iuv).r;

  vec2 g=uv; g.y=1.-g.y; g-=.5;
  float dist=length(g+vec2(0.,.2*diag));
  g=rot(g,(.25-.2*diag)*3.14159265);
  float bulge=1.-pow(1.8*dist,1.2); bulge*=pow(uv.y,.3);

  float cw=u_patternScale;
  vec3 w=vec3(.12/cw*(1.-.4*bulge), .07/cw*(1.+.4*bulge), 1.); w.z=1.-w.x-w.y;

  float op=1.-smoothstep(.9-.5*u_edge,1.-.5*u_edge,edge);
  op*=frame(iuv,0.01);

  float n=snoise(uv-t); edge+=(1.-edge)*u_liquid*n;

  float dir=g.x+diag;
  dir-=2.*n*diag*(smoothstep(0.,1.,edge)*smoothstep(1.,0.,edge));
  bulge*=clamp(pow(uv.y,.1),.3,1.);
  dir*=(.1+(1.1-edge)*bulge);
  dir*=smoothstep(1.,.7,edge);
  dir+=.18*(smoothstep(.1,.2,uv.y)*smoothstep(.4,.2,uv.y));
  dir+=.03*(smoothstep(.1,.2,1.-uv.y)*smoothstep(.4,.2,1.-uv.y));
  dir*=cw; dir-=t;

  float refr=clamp(1.-bulge,0.,1.);
  float rr=(refr+.03*bulge*n - diag)*u_refraction;
  float rb=(1.3*refr - .2*edge)*u_refraction;

  vec3 c1=vec3(.98); vec3 c2=vec3(.1,.1,.2);
  float pr=mod(dir+rr,1.), pg=mod(dir,1.), pb=mod(dir-rb,1.);
  float r=ch(c1.r,c2.r,pr,w,0.02+0.03*u_refraction*bulge,bulge);
  float g2=ch(c1.g,c2.g,pg,w,0.01/(1.-diag),bulge);
  float b=ch(c1.b,c2.b,pb,w,0.01,bulge);
  vec3 col=vec3(r,g2,b)*op; fragColor=vec4(col,op);
}`;

/* WebGL component with mipmaps */
function MetallicPaint({ imageData, size, params = defaultParams }:{
  imageData: ImageData; size: number; params?: ShaderParams;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [gl, setGl] = useState<WebGL2RenderingContext | null>(null);
  const [u, setU] = useState<Record<string, WebGLUniformLocation>>({});
  const acc = useRef(0); const last = useRef(0);

  useEffect(() => {
    const c = ref.current;
    const g = c?.getContext("webgl2", { antialias: true, alpha: true });
    if (!c || !g) return;

    const sh = (src:string, type:number) => { const s=g.createShader(type)!; g.shaderSource(s,src); g.compileShader(s);
      if(!g.getShaderParameter(s,g.COMPILE_STATUS)){ console.error(g.getShaderInfoLog(s)); g.deleteShader(s); return null; } return s; };
    const prog = g.createProgram()!;
    const vsObj = sh(vs, g.VERTEX_SHADER); const fsObj = sh(fs, g.FRAGMENT_SHADER);
    if (!vsObj || !fsObj) return;
    g.attachShader(prog, vsObj); g.attachShader(prog, fsObj); g.linkProgram(prog);
    if (!g.getProgramParameter(prog, g.LINK_STATUS)) { console.error(g.getProgramInfoLog(prog)); return; }
    g.useProgram(prog);

    const buf = g.createBuffer(); g.bindBuffer(g.ARRAY_BUFFER, buf);
    g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), g.STATIC_DRAW);
    const loc = g.getAttribLocation(prog, "a_position");
    g.enableVertexAttribArray(loc); g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0);

    const uu: Record<string, WebGLUniformLocation> = {};
    const cnt = g.getProgramParameter(prog, g.ACTIVE_UNIFORMS);
    for (let i = 0; i < cnt; i++) { const name = g.getActiveUniform(prog, i)?.name; if (name) uu[name] = g.getUniformLocation(prog, name)!; }
    setU(uu); setGl(g);
  }, []);

  useEffect(() => {
    if (!gl || !u) return;
    const tex = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imageData.width, imageData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData.data);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.uniform1i(u.u_image_texture, 0);

    gl.uniform1f(u.u_edge, params.edge);
    gl.uniform1f(u.u_patternBlur, params.patternBlur);
    gl.uniform1f(u.u_patternScale, params.patternScale);
    gl.uniform1f(u.u_refraction, params.refraction);
    gl.uniform1f(u.u_liquid, params.liquid);
    gl.uniform1f(u.u_time, 0);

    const imgRatio = imageData.width / imageData.height; gl.uniform1f(u.u_img_ratio, imgRatio);
  }, [gl, u, imageData, params]);

  useEffect(() => {
    const c = ref.current; if (!c || !gl || !u) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.style.width = `${size}px`; c.style.height = `${size}px`;
    c.width = Math.floor(size * dpr); c.height = Math.floor(size * dpr);
    gl.viewport(0, 0, c.width, c.height); gl.uniform1f(u.u_ratio, 1);
  }, [size, gl, u]);

  useEffect(() => {
    if (!gl || !u) return;
    let id = 0;
    const loop = (t:number) => { if (!last.current) last.current = t;
      acc.current += (t - last.current) * params.speed; last.current = t;
      gl.uniform1f(u.u_time, acc.current); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop); return () => cancelAnimationFrame(id);
  }, [gl, u, params.speed]);

  return <canvas ref={ref} className="block max-w-full max-h-full object-contain" />;
}

/* page */
export default function Cover() {
  const [img, setImg] = useState<ImageData | null>(null);
  const [size, setSize] = useState(320);

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth, vh = window.innerHeight;
      const reserved = vw < 768 ? 120 : 200; // reduced on mobile
      const side = Math.min(vw * 0.9, (vh - reserved));
      const s = Math.max(180, Math.min(600, Math.floor(side)));
      setSize(s);
      const fontPx = Math.floor(s * 0.55);
      const pad = Math.floor(s * 0.12);
      setImg(makeTextImageData({ text: "BST", px: fontPx, padding: pad }));
    };
    calc(); window.addEventListener("resize", calc); window.addEventListener("orientationchange", calc);
    return () => { window.removeEventListener("resize", calc); window.removeEventListener("orientationchange", calc); };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-[#121212]">
      <div
        className="relative z-10 flex flex-col items-center justify-center max-h-full max-w-full"
        style={{
          padding: "16px",
          gap: "14px",
        }}
      >
        {img && <MetallicPaint imageData={img} size={size} params={defaultParams} />}
        <p className="text-white/80 text-sm md:text-base text-center">One brand. Three experiences.</p>
        <Link
          to="/select"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-lg ring-1 ring-white/10 transition-transform active:scale-95"
          style={{
            background: "linear-gradient(135deg, #f5f7f8 0%, #cfd4d8 22%, #9ea4a9 45%, #e9ecef 60%, #9ea4a9 78%, #f5f7f8 100%)",
            color: "#111",
          }}
        >
          Enter
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
