import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle field component for futuristic background
function ParticleField({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions in a sphere
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 2 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6B82FF"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.2;
      meshRef1.current.rotation.z = t * 0.15;
      meshRef1.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.y = t * 0.3;
      meshRef2.current.position.x = Math.sin(t * 0.4) * 0.5;
      meshRef2.current.position.y = Math.cos(t * 0.3) * 0.2;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x = t * 0.15;
      meshRef3.current.rotation.y = t * 0.25;
      meshRef3.current.position.z = Math.sin(t * 0.35) * 0.4;
    }
  });

  return (
    <>
      {/* Icosahedron wireframe */}
      <mesh ref={meshRef1} position={[-2, 0.5, -1]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial color="#3E5EFF" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Torus wireframe */}
      <mesh ref={meshRef2} position={[2.2, -0.5, -1.5]}>
        <torusGeometry args={[0.6, 0.15, 16, 32]} />
        <meshBasicMaterial color="#FF457A" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Octahedron */}
      <mesh ref={meshRef3} position={[0.5, 1.2, -2]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#7BB89A" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#3D5A80" 
          transparent 
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

// Grid floor with subtle glow
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial 
        color="#6B82FF"
        transparent 
        opacity={0.04}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Light beams / rays effect
function LightBeams() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI * 2 / 6) * i]}>
          <planeGeometry args={[0.02, 8]} />
          <meshBasicMaterial 
            color="#6B82FF"
            transparent 
            opacity={0.05 + (i % 2) * 0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Hero Canvas Component
interface HeroCanvasProps {
  height?: string;
  className?: string;
}

export default function HeroCanvas({ height = '100vh', className = '' }: HeroCanvasProps) {
  return (
    <div style={{ width: '100%', height, position: 'absolute', top: 0, left: 0 }} className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <ParticleField count={2500} />
        <FloatingGeometry />
        <GridFloor />
        <LightBeams />
        
        {/* Subtle fog for depth */}
        <fog attach="fog" args={['#0d1320', 3, 12]} />
      </Canvas>
    </div>
  );
}
