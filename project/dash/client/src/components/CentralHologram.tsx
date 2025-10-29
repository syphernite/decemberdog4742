import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

interface Node {
  id: string;
  label: string;
  type: 'root' | 'branch';
  position: { x: number; y: number; z: number };
  connections: string[];
  value: number;
}

export function CentralHologram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Post-processing setup with bloom
    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.5,  // strength
      0.4,  // radius
      0.85  // threshold
    );
    composer.addPass(bloomPass);

    // Create neural network structure
    const nodes: Node[] = [
      { id: 'website', label: 'Website', type: 'root', position: { x: 0, y: -3, z: 0 }, connections: ['leads', 'traffic'], value: 1 },
      { id: 'google', label: 'Google Profile', type: 'root', position: { x: -2, y: -3, z: 0 }, connections: ['leads', 'reviews'], value: 1 },
      { id: 'leads', label: 'Leads', type: 'branch', position: { x: -1, y: 0, z: 0 }, connections: ['sales'], value: 0.8 },
      { id: 'traffic', label: 'Traffic', type: 'branch', position: { x: 1, y: 0, z: 0 }, connections: ['engagement'], value: 0.9 },
      { id: 'reviews', label: 'Reviews', type: 'branch', position: { x: -3, y: 0, z: 0 }, connections: ['reputation'], value: 0.7 },
      { id: 'sales', label: 'Sales', type: 'branch', position: { x: 0, y: 3, z: 0 }, connections: [], value: 1 },
      { id: 'engagement', label: 'Engagement', type: 'branch', position: { x: 2, y: 2, z: 0 }, connections: [], value: 0.85 },
      { id: 'reputation', label: 'Reputation', type: 'branch', position: { x: -2, y: 2, z: 0 }, connections: [], value: 0.95 },
    ];

    // Create node geometries with emissive materials for bloom
    const nodeObjects: THREE.Mesh[] = [];
    const connectionLines: THREE.Line[] = [];

    nodes.forEach(node => {
      const geometry = node.type === 'root' 
        ? new THREE.SphereGeometry(0.3, 32, 32)
        : new THREE.SphereGeometry(0.2, 32, 32);
      
      const color = node.type === 'root' ? 0x00F5FF : 0x8A2BE2;
      const material = new THREE.MeshStandardMaterial({ 
        color,
        emissive: color,
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0.9,
        roughness: 0.3,
        metalness: 0.7
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(node.position.x, node.position.y, node.position.z);
      mesh.userData = { id: node.id, pulse: 0, baseIntensity: 2 };
      
      scene.add(mesh);
      nodeObjects.push(mesh);

      // Create connections with glow
      node.connections.forEach(targetId => {
        const targetNode = nodes.find(n => n.id === targetId);
        if (targetNode) {
          const points = [
            new THREE.Vector3(node.position.x, node.position.y, node.position.z),
            new THREE.Vector3(targetNode.position.x, targetNode.position.y, targetNode.position.z)
          ];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00F5FF,
            transparent: true,
            opacity: 0.5
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          line.userData = { pulse: Math.random() * Math.PI * 2 };
          scene.add(line);
          connectionLines.push(line);
        }
      });
    });

    // Ambient particles with glow
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00F5FF,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add lights for better material interaction
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00F5FF, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate hologram slowly
      scene.rotation.y += 0.002;

      // Dynamic pulse on nodes with varying intensity
      nodeObjects.forEach(mesh => {
        mesh.userData.pulse += 0.05;
        const scale = 1 + Math.sin(mesh.userData.pulse) * 0.15;
        mesh.scale.set(scale, scale, scale);
        
        // Pulse emissive intensity for bloom effect
        const material = mesh.material as THREE.MeshStandardMaterial;
        const pulseIntensity = 1.5 + Math.sin(mesh.userData.pulse) * 0.8;
        material.emissiveIntensity = mesh.userData.baseIntensity * pulseIntensity;
      });

      // Animate connection lines opacity
      connectionLines.forEach(line => {
        line.userData.pulse += 0.03;
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = 0.3 + Math.sin(line.userData.pulse) * 0.2;
      });

      // Animate particles
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      // Render with post-processing
      composer.render();
    };

    animate();
    setIsReady(true);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full" data-testid="central-hologram">
      <div ref={containerRef} className="w-full h-full" />
      
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          />
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-md px-4 py-2">
        <p className="text-xs text-muted-foreground">Neural Network Visualization</p>
      </div>
    </div>
  );
}
