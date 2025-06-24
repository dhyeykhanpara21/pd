import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  rotation: [number, number, number];
  delay?: number;
}

export default function FloatingGeometry({ position, rotation, delay = 0 }: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Pre-calculate random values to avoid re-rendering
  const randomValues = useMemo(() => ({
    speed: 0.5 + Math.random() * 0.5,
    amplitude: 0.5 + Math.random() * 1.5,
    phase: Math.random() * Math.PI * 2,
    rotationSpeed: 0.2 + Math.random() * 0.8
  }), []);

  // Random geometry type
  const geometryType = useMemo(() => {
    const types = ['box', 'sphere', 'octahedron', 'torus'];
    return types[Math.floor(Math.random() * types.length)];
  }, []);

  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'sphere':
        return new THREE.SphereGeometry(1, 32, 32);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1);
      case 'torus':
        return new THREE.TorusGeometry(0.8, 0.3, 16, 100);
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [geometryType]);

  const material = useMemo(() => {
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      opacity: 0.7,
      roughness: 0.3,
      metalness: 0.1,
    });
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime + delay;
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * randomValues.speed + randomValues.phase) * randomValues.amplitude;
    
    // Rotation animation
    meshRef.current.rotation.x = rotation[0] + time * randomValues.rotationSpeed * 0.5;
    meshRef.current.rotation.y = rotation[1] + time * randomValues.rotationSpeed;
    meshRef.current.rotation.z = rotation[2] + time * randomValues.rotationSpeed * 0.3;
    
    // Gentle swaying
    meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.5;
    meshRef.current.position.z = position[2] + Math.sin(time * 0.2) * 0.3;
  });

  return (
    <mesh 
      ref={meshRef}
      position={position}
      rotation={rotation}
      geometry={geometry}
      material={material}
      castShadow
      receiveShadow
    />
  );
}
