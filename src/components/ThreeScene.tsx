
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingGrid from './FloatingGrid';
import { OrbitControls } from '@react-three/drei';

export default function ThreeScene() {
  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 3, 10], fov: 45 }}>
        <color attach="background" args={['#030712']} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingGrid />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
