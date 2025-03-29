
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      gridRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });
  
  return (
    <group ref={gridRef} position={[0, -2, 0]}>
      <gridHelper 
        args={[20, 20, '#0EA5E9', '#222222']} 
        position={[0, 0, 0]}
      />
    </group>
  );
}
