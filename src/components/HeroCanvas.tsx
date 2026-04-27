import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ========================================
// Aurora Shader Material
// ========================================
const auroraVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auroraFragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.15;

    // Mouse influence
    vec2 mouseInfluence = (uMouse - 0.5) * 0.15;
    uv += mouseInfluence * (1.0 - uv.y);

    // Multiple flowing aurora bands
    float aurora1 = snoise(vec3(uv.x * 2.0 + t, uv.y * 1.5 - t * 0.7, t * 0.3)) * 0.5 + 0.5;
    float aurora2 = snoise(vec3(uv.x * 1.5 - t * 0.5, uv.y * 2.0 + t * 0.4, t * 0.2 + 100.0)) * 0.5 + 0.5;
    float aurora3 = snoise(vec3(uv.x * 3.0 + t * 0.8, uv.y * 1.2 - t * 0.6, t * 0.4 + 200.0)) * 0.5 + 0.5;

    // Color palette - deep blues, purples, cyans, with your accent pink
    vec3 color1 = vec3(0.12, 0.18, 0.35);  // Deep blue
    vec3 color2 = vec3(0.24, 0.31, 0.65);  // Royal blue
    vec3 color3 = vec3(0.45, 0.35, 0.75);  // Purple
    vec3 color4 = vec3(0.15, 0.55, 0.70);  // Cyan
    vec3 color5 = vec3(0.87, 0.21, 0.48);  // Your accent pink #DF358A

    // Mix colors based on noise
    vec3 finalColor = mix(color1, color2, aurora1);
    finalColor = mix(finalColor, color3, aurora2 * 0.5);
    finalColor = mix(finalColor, color4, aurora3 * 0.35);

    // Add pink accent in certain areas
    float pinkZone = snoise(vec3(uv.x * 1.5 + t * 0.3, uv.y * 2.0, t * 0.15 + 50.0)) * 0.5 + 0.5;
    finalColor = mix(finalColor, color5, pinkZone * 0.12 * aurora1);

    // Brightness falloff - stronger at top, fades to dark at bottom
    float verticalFade = 1.0 - uv.y * 0.5;
    finalColor *= verticalFade;

    // Bottom darkening to blend with page background (#080c14)
    float bottomFade = smoothstep(0.0, 0.55, uv.y);
    finalColor *= bottomFade * 0.7 + 0.3;

    // Additional glow bands
    float band1 = smoothstep(0.3, 0.7, aurora1) * 0.35;
    float band2 = smoothstep(0.4, 0.8, aurora2) * 0.25;
    finalColor += color4 * band1 * 0.25;
    finalColor += color5 * band2 * 0.12;

    // Soft vignette
    float vignette = 1.0 - length((vUv - 0.5) * 1.2);
    vignette = smoothstep(0.1, 0.8, vignette);
    finalColor *= vignette * 1.15;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function AuroraBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;

      // Smooth mouse follow
      const targetX = state.mouse.x * 0.5 + 0.5;
      const targetY = state.mouse.y * 0.5 + 0.5;
      mouseRef.current.x += (targetX - mouseRef.current.x) * 0.03;
      mouseRef.current.y += (targetY - mouseRef.current.y) * 0.03;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <planeGeometry args={[22, 16]} />
      <shaderMaterial
        vertexShader={auroraVertexShader}
        fragmentShader={auroraFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

// ========================================
// Floating Dust Particles
// ========================================
function DustParticles({ count = 800 }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 12;
      pos[i3 + 1] = (Math.random() - 0.5) * 8;
      pos[i3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.rotation.y = t * 0.008;
      ref.current.rotation.x = Math.sin(t * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8BAACC"
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ========================================
// Large Futuristic Geometries
// ========================================
function LargeGeometries() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);
  const meshRef4 = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  // Position geometries on the right side - defined outside useFrame
  const rightOffset = viewport.width > 6 ? 3.0 : 2.2;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const targetX = state.mouse.x * 0.3;
    const targetY = state.mouse.y * 0.2;
    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.02;

    if (groupRef.current) {
      groupRef.current.position.x = rightOffset + mouseRef.current.x;
      groupRef.current.position.y = mouseRef.current.y;
    }

    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.15;
      meshRef1.current.rotation.y = t * 0.25;
      meshRef1.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.2;
      meshRef2.current.rotation.z = t * 0.12;
      meshRef2.current.position.y = Math.cos(t * 0.35) * 0.2;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = t * 0.18;
      meshRef3.current.rotation.x = Math.sin(t * 0.25) * 0.3;
    }
    if (meshRef4.current) {
      meshRef4.current.rotation.z = t * 0.1;
      meshRef4.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[rightOffset, 0, 0]}>
      {/* Large wireframe Icosahedron - main centerpiece */}
      <mesh ref={meshRef1} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          color="#3E5EFF"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh ref={meshRef4} position={[0, 0, 0]}>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial
          color="#3E5EFF"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Torus - larger */}
      <mesh ref={meshRef2} position={[2.4, -1.6, -1]}>
        <torusGeometry args={[1.3, 0.32, 16, 48]} />
        <meshBasicMaterial
          color="#FF457A"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Octahedron - floating above */}
      <mesh ref={meshRef3} position={[-1.6, 2.0, -1.5]}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#7BB89A"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Additional ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[3.0, 0.015, 8, 64]} />
        <meshBasicMaterial
          color="#3E5EFF"
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

// ========================================
// Main Hero Canvas Component
// ========================================
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
        <AuroraBackground />
        <DustParticles count={600} />
        <LargeGeometries />
      </Canvas>
    </div>
  );
}
