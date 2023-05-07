import React, { Suspense, useState, useEffect, ReactComponentElement} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

type ComputersProps = { isMobile: boolean }

const Computers = ( {isMobile}: ComputersProps) => {
  const computer = useGLTF("./macbook_m1/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor='black'/>
      <directionalLight position={[-5, 5, 0]} intensity={0.6}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={.65}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 17 : 17.75}
        position={isMobile ? [-0.5, -4, -0.75] : [2, -3.2, -2]}
        rotation={[0, 0.75, 0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;