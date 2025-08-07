
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Stats3D from "./Stats3D";

export default function StatsScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06b6d4" />
        
        {/* 3D Stats Icons */}
        <Stats3D type="rocket" position={[-3, 0, 0]} scale={1} />
        <Stats3D type="lightning" position={[-1, 0, 0]} scale={1} />
        <Stats3D type="star" position={[1, 0, 0]} scale={1} />
        <Stats3D type="sparkle" position={[3, 0, 0]} scale={1} />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
