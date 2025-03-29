
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function RobotModel(props: { position?: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const { position = [0, 0, 0], scale = 1 } = props;
  
  // Simple animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.position.y = props.position?.[1] + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  // Fallback to basic geometry if model fails to load
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 1, 4, 8]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Head */}
      <mesh castShadow position={[0, 1.1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[0.15, 1.1, 0.26]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.15, 1.1, 0.26]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={2} />
      </mesh>
      
      {/* Arms */}
      <mesh castShadow position={[0.6, 0.2, 0]}>
        <capsuleGeometry args={[0.15, 0.7, 4, 8]} />
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[-0.6, 0.2, 0]}>
        <capsuleGeometry args={[0.15, 0.7, 4, 8]} />
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Antenna */}
      <mesh castShadow position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}
