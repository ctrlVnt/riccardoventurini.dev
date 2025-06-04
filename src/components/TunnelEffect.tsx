
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const TunnelRings = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    const ringArray = [];
    for (let i = 0; i < 50; i++) {
      ringArray.push({
        position: [0, 0, -i * 4],
        scale: 1 + i * 0.1,
        rotation: i * 0.1,
      });
    }
    return ringArray;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Move the entire group based on scroll
      groupRef.current.position.z = scrollProgress * 100;
      
      // Rotate the group for dynamic effect
      groupRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <mesh
          key={index}
          position={ring.position as [number, number, number]}
          rotation={[0, 0, ring.rotation]}
        >
          <torusGeometry args={[ring.scale, 0.1, 8, 32]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL(0.5 + index * 0.02, 0.8, 0.5)}
            emissive={new THREE.Color().setHSL(0.5 + index * 0.02, 0.8, 0.1)}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const TunnelParticles = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      // Distribute particles in a cylindrical space
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 8;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 200;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Random colors
      const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.position.z = scrollProgress * 50;
      pointsRef.current.rotation.z += 0.002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={1000}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={1000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
};

const CameraController = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Create a zooming effect based on scroll
    const targetZ = 5 - scrollProgress * 3;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);
    
    // Add subtle camera shake for immersion
    camera.position.x = Math.sin(scrollProgress * 10) * 0.1;
    camera.position.y = Math.cos(scrollProgress * 8) * 0.1;
  });
  
  return null;
};

const TunnelScene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      
      <TunnelRings scrollProgress={scrollProgress} />
      <TunnelParticles scrollProgress={scrollProgress} />
      <CameraController scrollProgress={scrollProgress} />
      
      <fog attach="fog" args={['#0a0a0f', 5, 50]} />
    </>
  );
};

const TunnelEffect = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <TunnelScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default TunnelEffect;
