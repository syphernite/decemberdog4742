import { useEffect, useRef, FC } from "react";
import * as THREE from "three";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAPreset,
} from "postprocessing";

/* ---------- Types ---------- */
interface Distortion {
  uniforms: Record<string, { value: any }>;
  getDistortion: string;
  getJS?: (progress: number, time: number) => THREE.Vector3;
}
interface Distortions { [key: string]: Distortion; }
interface Colors {
  roadColor: number; islandColor: number; background: number;
  shoulderLines: number; brokenLines: number;
  leftCars: number[]; rightCars: number[]; sticks: number | number[];
}
interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent) => void;
  onSlowDown?: (ev: MouseEvent) => void;
  distortion?: string | Distortion;
  length: number; roadWidth: number; islandWidth: number; lanesPerRoad: number;
  fov: number; fovSpeedUp: number; speedUp: number; carLightsFade: number;
  totalSideLightSticks: number; lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number; brokenLinesWidthPercentage: number; brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number]; lightStickHeight: [number, number];
  movingAwaySpeed: [number, number]; movingCloserSpeed: [number, number];
  carLightsLength: [number, number]; carLightsRadius: [number, number];
  carWidthPercentage: [number, number]; carShiftX: [number, number]; carFloorSeparation: [number, number];
  colors: Colors; isHyper?: boolean;
}
interface HyperspeedProps { effectOptions?: Partial<HyperspeedOptions>; }

/* ---------- Defaults (tuned to be subtle and match gradient) ---------- */
const defaultOptions: HyperspeedOptions = {
  onSpeedUp: () => {}, onSlowDown: () => {},
  distortion: "turbulentDistortionStill",
  length: 400, roadWidth: 10, islandWidth: 2, lanesPerRoad: 4,
  fov: 70, fovSpeedUp: 95, speedUp: 1.25, carLightsFade: 0.35,
  totalSideLightSticks: 14, lightPairsPerRoadWay: 28,
  shoulderLinesWidthPercentage: 0.05, brokenLinesWidthPercentage: 0.1, brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.08, 0.28], lightStickHeight: [1.0, 1.4],
  movingAwaySpeed: [35, 55], movingCloserSpeed: [-60, -85],
  carLightsLength: [400 * 0.02, 400 * 0.12], carLightsRadius: [0.045, 0.11],
  carWidthPercentage: [0.28, 0.45], carShiftX: [-0.7, 0.7], carFloorSeparation: [0, 4],
  colors: {
    roadColor: 0x0a0a0f, islandColor: 0x0b0b11, background: 0x000000,
    shoulderLines: 0x2b2b35, brokenLines: 0x2b2b35,
    // matches coral → cyan gradient
    leftCars: [0xff6a66, 0xff5a5f, 0xff7a6e],
    rightCars: [0x00e5ff, 0x74f3ff, 0x10d0ff],
    sticks: [0x00e5ff, 0xff6a66],
  },
  isHyper: false,
};

function nsin(val: number) { return Math.sin(val) * 0.5 + 0.5; }

/* ---------- Distortion uniforms ---------- */
const mountainUniforms = { uFreq: { value: new THREE.Vector3(3, 6, 10) }, uAmp: { value: new THREE.Vector3(30, 30, 20) } };
const xyUniforms = { uFreq: { value: new THREE.Vector2(5, 2) }, uAmp: { value: new THREE.Vector2(25, 15) } };
const LongRaceUniforms = { uFreq: { value: new THREE.Vector2(2, 3) }, uAmp: { value: new THREE.Vector2(35, 10) } };
const turbulentUniforms = { uFreq: { value: new THREE.Vector4(4, 8, 8, 1) }, uAmp: { value: new THREE.Vector4(25, 5, 10, 10) } };
const deepUniforms = { uFreq: { value: new THREE.Vector2(4, 8) }, uAmp: { value: new THREE.Vector2(10, 20) }, uPowY: { value: new THREE.Vector2(20, 2) } };

/* ---------- Distortions ---------- */
const distortions: Distortions = {
  mountainDistortion: {
    uniforms: mountainUniforms,
    getDistortion: `
      uniform vec3 uAmp; uniform vec3 uFreq; #define PI 3.14159265358979
      float nsin(float v){ return sin(v) * .5 + .5; }
      vec3 getDistortion(float p){
        float f=.02;
        return vec3(
          cos(p*PI*uFreq.x+uTime)*uAmp.x - cos(f*PI*uFreq.x+uTime)*uAmp.x,
          nsin(p*PI*uFreq.y+uTime)*uAmp.y - nsin(f*PI*uFreq.y+uTime)*uAmp.y,
          nsin(p*PI*uFreq.z+uTime)*uAmp.z - nsin(f*PI*uFreq.z+uTime)*uAmp.z
        );
      }
    `,
    getJS: (p, t) => {
      const f=.02, uF=mountainUniforms.uFreq.value, uA=mountainUniforms.uAmp.value;
      const d=new THREE.Vector3(
        Math.cos(p*Math.PI*uF.x+t)*uA.x - Math.cos(f*Math.PI*uF.x+t)*uA.x,
        nsin(p*Math.PI*uF.y+t)*uA.y - nsin(f*Math.PI*uF.y+t)*uA.y,
        nsin(p*Math.PI*uF.z+t)*uA.z - nsin(f*Math.PI*uF.z+t)*uA.z
      );
      return d.multiply(new THREE.Vector3(2,2,2)).add(new THREE.Vector3(0,0,-5));
    }
  },
  xyDistortion: {
    uniforms: xyUniforms,
    getDistortion: `
      uniform vec2 uFreq; uniform vec2 uAmp; #define PI 3.14159265358979
      vec3 getDistortion(float p){
        float f=.02;
        return vec3(
          cos(p*PI*uFreq.x+uTime)*uAmp.x - cos(f*PI*uFreq.x+uTime)*uAmp.x,
          sin(p*PI*uFreq.y+PI/2.+uTime)*uAmp.y - sin(f*PI*uFreq.y+PI/2.+uTime)*uAmp.y,
          0.
        );
      }
    `,
    getJS: (p,t) => {
      const f=.02,uF=xyUniforms.uFreq.value,uA=xyUniforms.uAmp.value;
      const d=new THREE.Vector3(
        Math.cos(p*Math.PI*uF.x+t)*uA.x - Math.cos(f*Math.PI*uF.x+t)*uA.x,
        Math.sin(p*Math.PI*uF.y+t+Math.PI/2)*uA.y - Math.sin(f*Math.PI*uF.y+t+Math.PI/2)*uA.y,
        0
      );
      return d.multiply(new THREE.Vector3(2,.4,1)).add(new THREE.Vector3(0,0,-3));
    }
  },
  LongRaceDistortion: {
    uniforms: LongRaceUniforms,
    getDistortion: `
      uniform vec2 uFreq; uniform vec2 uAmp; #define PI 3.14159265358979
      vec3 getDistortion(float p){
        float c=.0125;
        return vec3(
          sin(p*PI*uFreq.x+uTime)*uAmp.x - sin(c*PI*uFreq.x+uTime)*uAmp.x,
          sin(p*PI*uFreq.y+uTime)*uAmp.y - sin(c*PI*uFreq.y+uTime)*uAmp.y,
          0.
        );
      }
    `,
    getJS: (p,t) => {
      const c=.0125,uF=LongRaceUniforms.uFreq.value,uA=LongRaceUniforms.uAmp.value;
      const d=new THREE.Vector3(
        Math.sin(p*Math.PI*uF.x+t)*uA.x - Math.sin(c*Math.PI*uF.x+t)*uA.x,
        Math.sin(p*Math.PI*uF.y+t)*uA.y - Math.sin(c*Math.PI*uF.y+t)*uA.y,
        0
      );
      return d.multiply(new THREE.Vector3(1,1,0)).add(new THREE.Vector3(0,0,-5));
    }
  },
  turbulentDistortion: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq; uniform vec4 uAmp; float nsin(float v){return sin(v)*.5+.5;}
      #define PI 3.14159265358979
      float getX(float p){return cos(PI*p*uFreq.r+uTime)*uAmp.r + pow(cos(PI*p*uFreq.g + uTime*(uFreq.g/uFreq.r)),2.)*uAmp.g;}
      float getY(float p){return -nsin(PI*p*uFreq.b+uTime)*uAmp.b + -pow(nsin(PI*p*uFreq.a + uTime/(uFreq.b/uFreq.a)),5.)*uAmp.a;}
      vec3 getDistortion(float p){
        return vec3(getX(p)-getX(.0125), getY(p)-getY(.0125), 0.);
      }
    `,
    getJS: (p,t) => {
      const uF=turbulentUniforms.uFreq.value,uA=turbulentUniforms.uAmp.value;
      const gx=(pp:number)=>Math.cos(Math.PI*pp*uF.x+t)*uA.x + Math.pow(Math.cos(Math.PI*pp*uF.y + t*(uF.y/uF.x)),2)*uA.y;
      const gy=(pp:number)=>-nsin(Math.PI*pp*uF.z+t)*uA.z - Math.pow(nsin(Math.PI*pp*uF.w + t/(uF.z/uF.w)),5)*uA.w;
      const d=new THREE.Vector3(gx(p)-gx(p+.007), gy(p)-gy(p+.007), 0);
      return d.multiply(new THREE.Vector3(-2,-5,0)).add(new THREE.Vector3(0,0,-10));
    }
  },
  turbulentDistortionStill: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq; uniform vec4 uAmp; float nsin(float v){return sin(v)*.5+.5;}
      #define PI 3.14159265358979
      float getX(float p){return cos(PI*p*uFreq.r)*uAmp.r + pow(cos(PI*p*uFreq.g*(uFreq.g/uFreq.r)),2.)*uAmp.g;}
      float getY(float p){return -nsin(PI*p*uFreq.b)*uAmp.b + -pow(nsin(PI*p*uFreq.a/(uFreq.b/uFreq.a)),5.)*uAmp.a;}
      vec3 getDistortion(float p){return vec3(getX(p)-getX(.02), getY(p)-getY(.02), 0.);}
    `,
  },
  deepDistortionStill: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq; uniform vec4 uAmp; uniform vec2 uPowY;
      float nsin(float v){return sin(v)*.5+.5;}
      #define PI 3.14159265358979
      float getX(float p){ return sin(p*PI*uFreq.x)*uAmp.x*2.; }
      float getY(float p){ return pow(abs(p*uPowY.x), uPowY.y) + sin(p*PI*uFreq.y)*uAmp.y; }
      vec3 getDistortion(float p){ return vec3(getX(p)-getX(.02), getY(p)-getY(.05), 0.); }
    `,
  },
};

/* simple XY distortion uniforms (unused directly but kept for completeness) */
const distortion_uniforms = { uDistortionX: { value: new THREE.Vector2(80, 3) }, uDistortionY: { value: new THREE.Vector2(-40, 2.5) } };
const distortion_vertex = `
  #define PI 3.14159265358979
  uniform vec2 uDistortionX; uniform vec2 uDistortionY;
  float nsin(float v){return sin(v)*.5+.5;}
  vec3 getDistortion(float p){
    p = clamp(p, 0., 1.);
    float xAmp = uDistortionX.r, xFreq = uDistortionX.g;
    float yAmp = uDistortionY.r, yFreq = uDistortionY.g;
    return vec3(xAmp * nsin(p * PI * xFreq - PI/2.), yAmp * nsin(p * PI * yFreq - PI/2.), 0.);
  }
`;

/* ---------- Utils ---------- */
function random(base: number | [number, number]) { return Array.isArray(base) ? Math.random() * (base[1]-base[0]) + base[0] : Math.random()*base; }
function pickRandom<T>(arr: T | T[]) { return Array.isArray(arr) ? arr[Math.floor(Math.random()*arr.length)] : arr; }
function lerp(current:number,target:number,speed=0.1,limit=0.001){let change=(target-current)*speed; if(Math.abs(change)<limit){change=target-current;} return change;}

/* ---------- Car lights ---------- */
class CarLights {
  webgl: App; options: HyperspeedOptions; colors: number[] | THREE.Color; speed: [number, number]; fade: THREE.Vector2;
  mesh!: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;
  constructor(webgl: App, options: HyperspeedOptions, colors: number[] | THREE.Color, speed: [number, number], fade: THREE.Vector2) {
    this.webgl = webgl; this.options = options; this.colors = colors; this.speed = speed; this.fade = fade;
  }
  init() {
    const options = this.options;
    const curve = new THREE.LineCurve3(new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,-1));
    const geometry = new THREE.TubeGeometry(curve, 40, 1, 8, false);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry as any) as THREE.InstancedBufferGeometry;
    instanced.instanceCount = options.lightPairsPerRoadWay * 2;
    const laneWidth = options.roadWidth / options.lanesPerRoad;

    const aOffset:number[] = [], aMetrics:number[] = [], aColor:number[] = [];
    const colorArray: THREE.Color[] = Array.isArray(this.colors) ? this.colors.map(c=>new THREE.Color(c)) : [new THREE.Color(this.colors)];

    for (let i=0;i<options.lightPairsPerRoadWay;i++){
      const radius = random(options.carLightsRadius);
      const length = random(options.carLightsLength);
      const spd = random(this.speed);
      const carLane = i % options.lanesPerRoad;
      let laneX = carLane * laneWidth - options.roadWidth/2 + laneWidth/2;
      const carWidth = random(options.carWidthPercentage) * laneWidth;
      const carShiftX = random(options.carShiftX) * laneWidth;
      laneX += carShiftX;
      const offsetY = random(options.carFloorSeparation) + radius * 1.3;
      const offsetZ = -random(options.length);

      // pair
      aOffset.push(laneX - carWidth/2, offsetY, offsetZ);
      aOffset.push(laneX + carWidth/2, offsetY, offsetZ);
      aMetrics.push(radius, length, spd, radius, length, spd);

      const color = pickRandom(colorArray);
      aColor.push(color.r, color.g, color.b, color.r, color.g, color.b);
    }

    instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
    instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
    instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));

    const material = new THREE.ShaderMaterial({
      fragmentShader: carLightsFragment,
      vertexShader: carLightsVertex,
      transparent: true,
      uniforms: Object.assign(
        { uTime: { value: 0 }, uTravelLength: { value: options.length }, uFade: { value: this.fade } },
        this.webgl.fogUniforms,
        (typeof this.options.distortion === "object" ? this.options.distortion.uniforms : {}) || {}
      ),
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <getDistortion_vertex>",
        typeof this.options.distortion === "object" ? this.options.distortion.getDistortion : ""
      );
    };

    const mesh = new THREE.Mesh(instanced, material);
    mesh.frustumCulled = false;
    this.webgl.scene.add(mesh);
    this.mesh = mesh;
  }
  update(time:number){ if ((this.mesh.material as any).uniforms.uTime) { (this.mesh.material as any).uniforms.uTime.value = time; } }
}

const carLightsFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  varying vec3 vColor; varying vec2 vUv; uniform vec2 uFade;
  void main() {
    vec3 color = vec3(vColor);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
    gl_FragColor = vec4(color, alpha);
    if (gl_FragColor.a < 0.0001) discard;
    ${THREE.ShaderChunk["fog_fragment"]}
  }
`;
const carLightsVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_vertex"]}
  attribute vec3 aOffset; attribute vec3 aMetrics; attribute vec3 aColor;
  uniform float uTravelLength; uniform float uTime;
  varying vec2 vUv; varying vec3 vColor;
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    float radius=aMetrics.r, myLength=aMetrics.g, speed=aMetrics.b;
    transformed.xy *= radius; transformed.z *= myLength;
    transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
    transformed.xy += aOffset.xy;
    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition; vUv = uv; vColor = aColor;
    ${THREE.ShaderChunk["fog_vertex"]}
  }
`;

/* ---------- Side sticks ---------- */
class LightsSticks {
  webgl: App; options: HyperspeedOptions;
  mesh!: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;
  constructor(webgl: App, options: HyperspeedOptions){ this.webgl=webgl; this.options=options; }
  init(){
    const options=this.options;
    const geometry=new THREE.PlaneGeometry(1,1);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry as any) as THREE.InstancedBufferGeometry;
    const total=options.totalSideLightSticks; instanced.instanceCount=total;

    const stickoffset=options.length/(total-1);
    const aOffset:number[]=[], aColor:number[]=[], aMetrics:number[]=[];
    const colors = Array.isArray(options.colors.sticks) ? (options.colors.sticks as number[]).map(c=>new THREE.Color(c)) : [new THREE.Color(options.colors.sticks as number)];

    for(let i=0;i<total;i++){
      const width=random(options.lightStickWidth), height=random(options.lightStickHeight);
      aOffset.push((i-1)*stickoffset*2 + stickoffset*Math.random());
      const col = pickRandom(colors); aColor.push(col.r,col.g,col.b);
      aMetrics.push(width,height);
    }

    instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset),1,false));
    instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor),3,false));
    instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics),2,false));

    const material=new THREE.ShaderMaterial({
      fragmentShader: sideSticksFragment,
      vertexShader: sideSticksVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign({ uTravelLength:{value:options.length}, uTime:{value:0} }, this.webgl.fogUniforms,
        (typeof options.distortion==="object" ? options.distortion.uniforms : {}) || {})
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace("#include <getDistortion_vertex>",
        typeof this.options.distortion==="object" ? this.options.distortion.getDistortion : "");
    };

    const mesh=new THREE.Mesh(instanced, material); mesh.frustumCulled=false;
    this.webgl.scene.add(mesh); this.mesh=mesh;
  }
  update(time:number){ if ((this.mesh.material as any).uniforms.uTime) { (this.mesh.material as any).uniforms.uTime.value = time; } }
}

const sideSticksVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_vertex"]}
  attribute float aOffset; attribute vec3 aColor; attribute vec2 aMetrics;
  uniform float uTravelLength; uniform float uTime; varying vec3 vColor;
  mat4 rotationY(float a){ return mat4(cos(a),0.,sin(a),0., 0.,1.,0.,0., -sin(a),0.,cos(a),0., 0.,0.,0.,1.); }
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed=position.xyz;
    float width=aMetrics.x, height=aMetrics.y;
    transformed.xy *= vec2(width,height);
    float time = mod(uTime*60.*2.+aOffset, uTravelLength);
    transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
    transformed.z += -uTravelLength + time;
    float progress = abs(transformed.z/uTravelLength);
    transformed.xyz += getDistortion(progress);
    transformed.y += height/2.; transformed.x += -width/2.;
    vec4 mvPosition = modelViewMatrix * vec4(transformed,1.);
    gl_Position = projectionMatrix * mvPosition; vColor=aColor;
    ${THREE.ShaderChunk["fog_vertex"]}
  }
`;
const sideSticksFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  varying vec3 vColor;
  void main(){ gl_FragColor = vec4(vColor, 0.9); ${THREE.ShaderChunk["fog_fragment"]} }
`;

/* ---------- Road ---------- */
class Road {
  webgl: App; options: HyperspeedOptions; uTime:{value:number};
  leftRoadWay!: THREE.Mesh; rightRoadWay!: THREE.Mesh; island!: THREE.Mesh;
  constructor(webgl:App, options:HyperspeedOptions){ this.webgl=webgl; this.options=options; this.uTime={value:0}; }
  createPlane(side:number, width:number, isRoad:boolean){
    const options=this.options, segments=100;
    const geometry=new THREE.PlaneGeometry(isRoad?options.roadWidth:options.islandWidth, options.length, 20, segments);
    let uniforms:Record<string,{value:any}> = {
      uTravelLength:{value:options.length}, uColor:{value:new THREE.Color(isRoad?options.colors.roadColor:options.colors.islandColor)}, uTime:this.uTime
    };
    if(isRoad){
      uniforms=Object.assign(uniforms,{
        uLanes:{value:options.lanesPerRoad},
        uBrokenLinesColor:{value:new THREE.Color(options.colors.brokenLines)},
        uShoulderLinesColor:{value:new THREE.Color(options.colors.shoulderLines)},
        uShoulderLinesWidthPercentage:{value:options.shoulderLinesWidthPercentage},
        uBrokenLinesLengthPercentage:{value:options.brokenLinesLengthPercentage},
        uBrokenLinesWidthPercentage:{value:options.brokenLinesWidthPercentage},
      });
    }

    const material=new THREE.ShaderMaterial({
      fragmentShader: isRoad?roadFragment:islandFragment, vertexShader: roadVertex, side:THREE.DoubleSide,
      uniforms: Object.assign(uniforms, this.webgl.fogUniforms, (typeof options.distortion==="object"?options.distortion.uniforms:{}) || {})
    });
    material.onBeforeCompile=(shader)=>{ shader.vertexShader = shader.vertexShader.replace("#include <getDistortion_vertex>",
      typeof this.options.distortion==="object" ? this.options.distortion.getDistortion : ""); };

    const mesh=new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI/2; mesh.position.z = -options.length/2;
    mesh.position.x += (this.options.islandWidth/2 + options.roadWidth/2) * side;
    this.webgl.scene.add(mesh); return mesh;
  }
  init(){ this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,true); this.rightRoadWay=this.createPlane(1,this.options.roadWidth,true); this.island=this.createPlane(0,this.options.islandWidth,false); }
  update(time:number){ this.uTime.value=time; }
}

const roadBaseFragment = `
  #define USE_FOG;
  varying vec2 vUv; uniform vec3 uColor; uniform float uTime;
  #include <roadMarkings_vars>
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  void main(){
    vec2 uv=vUv; vec3 color=vec3(uColor);
    #include <roadMarkings_fragment>
    gl_FragColor = vec4(color, 1.); ${THREE.ShaderChunk["fog_fragment"]}
  }
`;
const islandFragment = roadBaseFragment.replace("#include <roadMarkings_fragment>", "").replace("#include <roadMarkings_vars>", "");
const roadMarkings_vars = `
  uniform float uLanes; uniform vec3 uBrokenLinesColor; uniform vec3 uShoulderLinesColor;
  uniform float uShoulderLinesWidthPercentage; uniform float uBrokenLinesWidthPercentage; uniform float uBrokenLinesLengthPercentage;
  highp float random(vec2 co){ highp float a=12.9898; highp float b=78.233; highp float c=43758.5453; highp float dt=dot(co.xy, vec2(a,b)); highp float sn=mod(dt, 3.14); return fract(sin(sn)*c); }
`;
const roadMarkings_fragment = `
  uv.y = mod(uv.y + uTime * 0.05, 1.);
  float laneWidth = 1.0 / uLanes;
  float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
  float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;
  float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
  float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);
  brokenLines = mix(brokenLines, sideLines, uv.x);
`;
const roadFragment = roadBaseFragment.replace("#include <roadMarkings_fragment>", roadMarkings_fragment).replace("#include <roadMarkings_vars>", roadMarkings_vars);
const roadVertex = `
  #define USE_FOG;
  uniform float uTime; ${THREE.ShaderChunk["fog_pars_vertex"]}
  uniform float uTravelLength; varying vec2 vUv;
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    vec3 d = getDistortion((transformed.y + uTravelLength/2.) / uTravelLength);
    transformed.x += d.x; transformed.z += d.y; transformed.y += -1. * d.z;
    vec4 mvPosition = modelViewMatrix * vec4(transformed,1.);
    gl_Position = projectionMatrix * mvPosition; vUv=uv; ${THREE.ShaderChunk["fog_vertex"]}
  }
`;

/* ---------- App ---------- */
function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer, setSize:(w:number,h:number,u:boolean)=>void){
  const c = renderer.domElement; const w=c.clientWidth, h=c.clientHeight; const need=w!==c.width || h!==c.height;
  if (need) setSize(w,h,false); return need;
}

class App {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderPass!: RenderPass; bloomPass!: EffectPass; clock: THREE.Clock;
  assets: Record<string, any>; disposed: boolean;
  road: Road; leftCarLights: CarLights; rightCarLights: CarLights; leftSticks: LightsSticks; rightSticks: LightsSticks;  // <-- added rightSticks
  fogUniforms: Record<string,{value:any}>; fovTarget:number; speedUpTarget:number; speedUp:number; timeOffset:number;

  constructor(container: HTMLElement, options: HyperspeedOptions){
    this.options = options;
    if(!this.options.distortion){ this.options.distortion = { uniforms: distortion_uniforms, getDistortion: distortion_vertex }; }
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({ antialias:false, alpha:true });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.composer = new EffectComposer(this.renderer);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(options.fov, container.offsetWidth / container.offsetHeight, 0.1, 10000);
    this.camera.position.z = -5; this.camera.position.y = 8; this.camera.position.x = 0;

    this.scene = new THREE.Scene(); this.scene.background = null;

    const fog = new THREE.Fog(options.colors.background, options.length*0.2, options.length*500);
    this.scene.fog = fog;
    this.fogUniforms = { fogColor:{value:fog.color}, fogNear:{value:fog.near}, fogFar:{value:fog.far} };

    this.clock = new THREE.Clock(); this.assets = {}; this.disposed=false;

    this.road = new Road(this, options);
    this.leftCarLights = new CarLights(this, options, options.colors.leftCars, options.movingAwaySpeed, new THREE.Vector2(0, 1 - options.carLightsFade));
    this.rightCarLights = new CarLights(this, options, options.colors.rightCars, options.movingCloserSpeed, new THREE.Vector2(1, 0 + options.carLightsFade));
    this.leftSticks = new LightsSticks(this, options);
    this.rightSticks = new LightsSticks(this, options); // <-- new mirrored sticks

    this.fovTarget = options.fov; this.speedUpTarget = 0; this.speedUp = 0; this.timeOffset = 0;

    this.tick = this.tick.bind(this); this.init = this.init.bind(this); this.setSize = this.setSize.bind(this);
    this.onMouseDown=this.onMouseDown.bind(this); this.onMouseUp=this.onMouseUp.bind(this);
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize(){
    const w=this.container.offsetWidth, h=this.container.offsetHeight;
    this.renderer.setSize(w,h); this.camera.aspect = w/h; this.camera.updateProjectionMatrix(); this.composer.setSize(w,h);
  }

  initPasses(){
    this.renderPass = new RenderPass(this.scene, this.camera);
    // softer bloom so it doesn't overpower hero
    this.bloomPass = new EffectPass(this.camera, new BloomEffect({ luminanceThreshold: 0.6, luminanceSmoothing: 0.1, resolutionScale: 0.75 }));
    const smaaPass = new EffectPass(this.camera, new SMAAEffect({ preset: SMAAPreset.MEDIUM }));
    this.renderPass.renderToScreen = false; this.bloomPass.renderToScreen = false; smaaPass.renderToScreen = true;
    this.composer.addPass(this.renderPass); this.composer.addPass(this.bloomPass); this.composer.addPass(smaaPass);
  }

  loadAssets(): Promise<void>{
    const assets=this.assets;
    return new Promise((resolve)=>{
      const manager = new THREE.LoadingManager(resolve);
      const searchImage = new Image(); const areaImage = new Image(); assets.smaa = {};
      searchImage.addEventListener("load", function(){ assets.smaa.search=this; manager.itemEnd("smaa-search"); });
      areaImage.addEventListener("load", function(){ assets.smaa.area=this; manager.itemEnd("smaa-area"); });
      manager.itemStart("smaa-search"); manager.itemStart("smaa-area");
      searchImage.src = SMAAEffect.searchImageDataURL; areaImage.src = SMAAEffect.areaImageDataURL;
    });
  }

  init(){
    this.initPasses();
    const o=this.options;
    this.road.init();
    this.leftCarLights.init(); this.leftCarLights.mesh.position.setX(-(o.roadWidth/2 + o.islandWidth/2));
    this.rightCarLights.init(); this.rightCarLights.mesh.position.setX(o.roadWidth/2 + o.islandWidth/2);
    this.leftSticks.init(); this.leftSticks.mesh.position.setX(-(o.roadWidth + o.islandWidth/2));
    this.rightSticks.init(); this.rightSticks.mesh.position.setX(o.roadWidth + o.islandWidth/2); // <-- mirror on right
    this.container.addEventListener("mousedown", this.onMouseDown);
    this.container.addEventListener("mouseup", this.onMouseUp);
    this.container.addEventListener("mouseout", this.onMouseUp);
    this.tick();
  }

  onMouseDown(ev:MouseEvent){ if(this.options.onSpeedUp) this.options.onSpeedUp(ev); this.fovTarget=this.options.fovSpeedUp; this.speedUpTarget=this.options.speedUp; }
  onMouseUp(ev:MouseEvent){ if(this.options.onSlowDown) this.options.onSlowDown(ev); this.fovTarget=this.options.fov; this.speedUpTarget=0; }

  update(delta:number){
    const lerpPct = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
    this.speedUp += lerp(this.speedUp, this.speedUpTarget, lerpPct, 0.00001);
    this.timeOffset += this.speedUp * delta;
    const time = this.clock.getDelta() + (this.timeOffset += 0);

    const t = this.clock.elapsedTime + this.timeOffset;
    this.rightCarLights.update(t); this.leftCarLights.update(t);
    this.leftSticks.update(t); this.rightSticks.update(t);  // <-- update both sides
    this.road.update(t);

    let updateCam=false; const fovChange=lerp(this.camera.fov, this.fovTarget, lerpPct);
    if(fovChange!==0){ this.camera.fov += fovChange * delta * 6; updateCam=true; }
    if(typeof this.options.distortion==="object" && this.options.distortion.getJS){
      const d=this.options.distortion.getJS(0.025, t);
      this.camera.lookAt(new THREE.Vector3(this.camera.position.x + d.x, this.camera.position.y + d.y, this.camera.position.z + d.z));
      updateCam=true;
    }
    if(updateCam) this.camera.updateProjectionMatrix();
  }

  render(delta:number){ this.composer.render(delta); }
  dispose(){
    this.disposed=true;
    if(this.renderer) this.renderer.dispose();
    if(this.composer) this.composer.dispose();
    if(this.scene) this.scene.clear();
    window.removeEventListener("resize", this.onWindowResize.bind(this));
    if(this.container){
      this.container.removeEventListener("mousedown", this.onMouseDown);
      this.container.removeEventListener("mouseup", this.onMouseUp);
      this.container.removeEventListener("mouseout", this.onMouseUp);
    }
  }
  setSize(w:number,h:number,u:boolean){ this.composer.setSize(w,h,u); }
  tick(){
    if(this.disposed || !this) return;
    if(resizeRendererToDisplaySize(this.renderer, this.setSize)){
      const c=this.renderer.domElement; this.camera.aspect=c.clientWidth/c.clientHeight; this.camera.updateProjectionMatrix();
    }
    const delta = this.clock.getDelta();
    this.render(delta); this.update(delta); requestAnimationFrame(this.tick);
  }
}

/* ---------- Component ---------- */
const Hyperspeed: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const mergedOptions: HyperspeedOptions = { ...defaultOptions, ...effectOptions };
  const hyperspeed = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
      const container = hyperspeed.current;
      if (container) while (container.firstChild) container.removeChild(container.firstChild);
    }
    const container = hyperspeed.current;
    if (!container) return;

    const opts = { ...mergedOptions };
    if (typeof opts.distortion === "string") { opts.distortion = distortions[opts.distortion]; }

    const app = new App(container, opts);
    appRef.current = app;
    app.loadAssets().then(app.init);
    return () => { appRef.current?.dispose(); };
  }, [mergedOptions]);

  return <div className="w-full h-full" ref={hyperspeed} />;
};

export default Hyperspeed;
