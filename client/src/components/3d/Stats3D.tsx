
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Stats3DProps {
  type: 'rocket' | 'lightning' | 'star' | 'sparkle';
  position: [number, number, number];
  scale?: number;
}

export default function Stats3D({ type, position, scale = 1 }: Stats3DProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Different 3D geometries for each stat type
  const { geometry, material } = useMemo(() => {
    let geom;
    let mat;

    switch (type) {
      case 'rocket':
        // Create a rocket-like shape using cylinder and cone
        geom = new THREE.CylinderGeometry(0.2, 0.3, 1, 8);
        mat = new THREE.MeshStandardMaterial({
          color: '#8b5cf6',
          metalness: 0.7,
          roughness: 0.3,
          emissive: '#8b5cf6',
          emissiveIntensity: 0.1
        });
        break;
        
      case 'lightning':
        // Lightning bolt using extruded shape
        const lightningShape = new THREE.Shape();
        lightningShape.moveTo(0, 0.5);
        lightningShape.lineTo(0.2, 0.2);
        lightningShape.lineTo(0.1, 0.2);
        lightningShape.lineTo(0.3, -0.5);
        lightningShape.lineTo(0, -0.2);
        lightningShape.lineTo(0.1, -0.2);
        lightningShape.lineTo(-0.1, 0.5);
        
        geom = new THREE.ExtrudeGeometry(lightningShape, {
          depth: 0.1,
          bevelEnabled: true,
          bevelSize: 0.02,
          bevelThickness: 0.01
        });
        mat = new THREE.MeshStandardMaterial({
          color: '#10b981',
          metalness: 0.8,
          roughness: 0.2,
          emissive: '#10b981',
          emissiveIntensity: 0.2
        });
        break;
        
      case 'star':
        // 3D star using custom geometry
        const starPoints = [];
        const outerRadius = 0.4;
        const innerRadius = 0.2;
        
        for (let i = 0; i < 10; i++) {
          const angle = (i / 10) * Math.PI * 2;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          starPoints.push(new THREE.Vector2(Math.cos(angle) * radius, Math.sin(angle) * radius));
        }
        
        const starShape = new THREE.Shape(starPoints);
        geom = new THREE.ExtrudeGeometry(starShape, {
          depth: 0.15,
          bevelEnabled: true,
          bevelSize: 0.02,
          bevelThickness: 0.01
        });
        mat = new THREE.MeshStandardMaterial({
          color: '#f59e0b',
          metalness: 0.6,
          roughness: 0.4,
          emissive: '#f59e0b',
          emissiveIntensity: 0.15
        });
        break;
        
      case 'sparkle':
        // Diamond/crystal shape
        geom = new THREE.OctahedronGeometry(0.3, 1);
        mat = new THREE.MeshStandardMaterial({
          color: '#06b6d4',
          metalness: 0.9,
          roughness: 0.1,
          emissive: '#06b6d4',
          emissiveIntensity: 0.1
        });
        break;
        
      default:
        geom = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        mat = new THREE.MeshStandardMaterial({ color: '#8b5cf6' });
    }

    return { geometry: geom, material: mat };
  }, [type]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1;
    
    // Rotation animations - different for each type
    switch (type) {
      case 'rocket':
        meshRef.current.rotation.y = time;
        meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
        break;
      case 'lightning':
        meshRef.current.rotation.z = Math.sin(time * 3) * 0.3;
        break;
      case 'star':
        meshRef.current.rotation.y = time * 0.5;
        meshRef.current.rotation.z = Math.sin(time) * 0.2;
        break;
      case 'sparkle':
        meshRef.current.rotation.x = time;
        meshRef.current.rotation.y = time * 0.7;
        break;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh geometry={geometry} material={material} castShadow receiveShadow />
      
      {/* Add a subtle glow effect */}
      <mesh geometry={geometry} scale={1.2}>
        <meshBasicMaterial
          color={material.color}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}
