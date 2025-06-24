import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import * as THREE from "three";

export default function Scene() {
  const location = useLocation();

  // Solar system planets data
  const planets = useMemo(() => [
    { 
      name: "Sun", 
      position: [0, 0, 0], 
      size: 2, 
      color: "#ffaa00", 
      orbitRadius: 0, 
      orbitSpeed: 0,
      glowIntensity: 1
    },
    { 
      name: "Mercury", 
      position: [4, 0, 0], 
      size: 0.3, 
      color: "#8c7853", 
      orbitRadius: 4, 
      orbitSpeed: 0.8,
      glowIntensity: 0.3
    },
    { 
      name: "Venus", 
      position: [6, 0, 0], 
      size: 0.5, 
      color: "#ffc649", 
      orbitRadius: 6, 
      orbitSpeed: 0.6,
      glowIntensity: 0.4
    },
    { 
      name: "Earth", 
      position: [8, 0, 0], 
      size: 0.6, 
      color: "#6b93d6", 
      orbitRadius: 8, 
      orbitSpeed: 0.5,
      glowIntensity: 0.5
    },
    { 
      name: "Mars", 
      position: [10, 0, 0], 
      size: 0.4, 
      color: "#cd5c5c", 
      orbitRadius: 10, 
      orbitSpeed: 0.4,
      glowIntensity: 0.3
    },
    { 
      name: "Jupiter", 
      position: [14, 0, 0], 
      size: 1.2, 
      color: "#d8ca9d", 
      orbitRadius: 14, 
      orbitSpeed: 0.3,
      glowIntensity: 0.6
    },
    { 
      name: "Saturn", 
      position: [18, 0, 0], 
      size: 1, 
      color: "#fad5a5", 
      orbitRadius: 18, 
      orbitSpeed: 0.2,
      glowIntensity: 0.5,
      hasRings: true
    },
    { 
      name: "Uranus", 
      position: [22, 0, 0], 
      size: 0.8, 
      color: "#4fd0e7", 
      orbitRadius: 22, 
      orbitSpeed: 0.15,
      glowIntensity: 0.4
    },
    { 
      name: "Neptune", 
      position: [26, 0, 0], 
      size: 0.7, 
      color: "#4b70dd", 
      orbitRadius: 26, 
      orbitSpeed: 0.1,
      glowIntensity: 0.4
    }
  ], []);

  // Camera animation based on current route
  useFrame((state) => {
    const camera = state.camera;
    const time = state.clock.elapsedTime;
    
    // Route-based camera positioning
    let targetPosition = [0, 0, 15];
    let lookAtTarget = [0, 0, 0];
    
    switch (location.pathname) {
      case '/':
        targetPosition = [0, 2, 15];
        lookAtTarget = [0, 0, 0];
        break;
      case '/projects':
        targetPosition = [10, 3, 12];
        lookAtTarget = [8, 0, 0]; // Earth
        break;
      case '/about':
        targetPosition = [-8, 4, 10];
        lookAtTarget = [6, 0, 0]; // Venus
        break;
      case '/github':
        targetPosition = [16, 6, 14];
        lookAtTarget = [14, 0, 0]; // Jupiter
        break;
      case '/contact':
        targetPosition = [20, 8, 16];
        lookAtTarget = [18, 0, 0]; // Saturn
        break;
    }

    // Smooth camera interpolation
    camera.position.x += (targetPosition[0] - camera.position.x) * 0.02;
    camera.position.y += (targetPosition[1] - camera.position.y) * 0.02;
    camera.position.z += (targetPosition[2] - camera.position.z) * 0.02;

    // Dynamic look-at with slight movement
    camera.lookAt(
      lookAtTarget[0] + Math.sin(time * 0.3) * 0.5,
      lookAtTarget[1] + Math.cos(time * 0.2) * 0.3,
      lookAtTarget[2]
    );
  });

  return (
    <group>
      {/* Solar System Lighting */}
      <ambientLight intensity={0.1} color="#1a0d2e" />
      
      {/* Sun as main light source */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={2} 
        color="#ffaa00" 
        distance={50}
        decay={2}
      />
      
      {/* Secondary cosmic lighting */}
      <pointLight position={[30, 20, 30]} intensity={0.3} color="#e879f9" />
      <pointLight position={[-30, -20, 30]} intensity={0.2} color="#6a0dad" />

      {/* Orbit paths (rendered first so planets appear on top) */}
      <group>
        {planets.map((planet) => (
          planet.orbitRadius > 0 && (
            <mesh key={`orbit-${planet.name}`} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[planet.orbitRadius - 0.02, planet.orbitRadius + 0.02, 128]} />
              <meshBasicMaterial 
                color="#ffffff"
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
              />
            </mesh>
          )
        ))}
      </group>

      {/* Solar System Planets */}
      {planets.map((planet, index) => (
        <Planet key={planet.name} {...planet} />
      ))}

      {/* Cosmic Dust and Stars */}
      <StarField />
      <CosmicDust />
    </group>
  );
}



function Planet({ 
  name, 
  position, 
  size, 
  color, 
  orbitRadius, 
  orbitSpeed, 
  glowIntensity,
  hasRings = false 
}: {
  name: string;
  position: [number, number, number];
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  glowIntensity: number;
  hasRings?: boolean;
}) {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!planetRef.current) return;

    const time = state.clock.elapsedTime;
    
    // Perfect circular orbital motion around the Sun
    if (orbitRadius > 0) {
      const angle = time * orbitSpeed;
      planetRef.current.position.x = Math.cos(angle) * orbitRadius;
      planetRef.current.position.z = Math.sin(angle) * orbitRadius;
      planetRef.current.position.y = 0; // Keep planets on the same orbital plane
    } else {
      // Sun stays at the center
      planetRef.current.position.set(0, 0, 0);
    }

    // Planet self-rotation (spinning on own axis)
    if (meshRef.current) {
      meshRef.current.rotation.y += orbitSpeed * 5; // Planets spin on their axis
    }
  });

  return (
    <group ref={planetRef}>
      {/* Planet sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={name === "Sun" ? 0.8 : glowIntensity * 0.2}
        />
      </mesh>

      {/* Saturn's rings */}
      {hasRings && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.2, size * 2, 64]} />
          <meshBasicMaterial 
            color={color}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Planet glow effect */}
      <mesh>
        <sphereGeometry args={[size * 1.2, 16, 16]} />
        <meshBasicMaterial 
          color={color}
          transparent
          opacity={glowIntensity * 0.08}
        />
      </mesh>
    </group>
  );
}

function StarField() {
  const starsRef = useRef<THREE.Points>(null);
  
  const starPositions = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 100 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame(() => {
    if (!starsRef.current) return;
    starsRef.current.rotation.y += 0.0001;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    return geom;
  }, [starPositions]);

  return (
    <points ref={starsRef} geometry={geometry}>
      <pointsMaterial
        color="#ffffff"
        size={0.5}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function CosmicDust() {
  const dustRef = useRef<THREE.Points>(null);
  
  const dustPositions = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 80;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (!dustRef.current) return;
    
    const time = state.clock.elapsedTime;
    dustRef.current.rotation.y = time * 0.0002;
    dustRef.current.rotation.x = time * 0.0001;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    return geom;
  }, [dustPositions]);

  return (
    <points ref={dustRef} geometry={geometry}>
      <pointsMaterial
        color="#e879f9"
        size={0.2}
        transparent
        opacity={0.4}
      />
    </points>
  );
}
