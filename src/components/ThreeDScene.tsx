
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Text } from '@react-three/drei';
import { Group, MeshStandardMaterial } from 'three';

function Model({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const group = useRef<Group>(null);
  
  // Animation for the model
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = Math.sin(t / 1.5) / 10;
  });

  // Simple cube mesh as a placeholder
  return (
    <group ref={group} position={position} rotation={rotation}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#9b87f5" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

export function ThreeDScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Model position={[0, -1, 0]} />
      
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      
      {/* 3D Text */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <Text
          font="/fonts/Inter-Bold.woff"
          position={[0, 2, 0]}
          fontSize={0.75}
          color="#9b87f5"
          anchorX="center"
          anchorY="middle"
        >
          PORTFOLIO
        </Text>
      </Float>
    </Canvas>
  );
}
