import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Pre-calculate particle positions to avoid re-rendering
  const particleData = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a large sphere
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(particleData.positions, 3));
    return geom;
  }, [particleData.positions]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#ffffff',
      size: 0.5,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Update positions based on velocities
      positions[i] += particleData.velocities[i];
      positions[i + 1] += particleData.velocities[i + 1];
      positions[i + 2] += particleData.velocities[i + 2];
      
      // Wrap around when particles go too far
      if (Math.abs(positions[i]) > 50) positions[i] *= -1;
      if (Math.abs(positions[i + 1]) > 50) positions[i + 1] *= -1;
      if (Math.abs(positions[i + 2]) > 50) positions[i + 2] *= -1;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points 
      ref={pointsRef}
      geometry={geometry}
      material={material}
    />
  );
}
