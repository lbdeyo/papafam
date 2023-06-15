import {Cloud, Sparkles, Stars, useTexture} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import React, {useRef, useEffect} from "react";
import {BufferGeometry, Material, MeshNormalMaterial} from "three";

export const StarField = () => {
  const allStars =
    useRef<THREE.Points<BufferGeometry, Material | Material[]>>(null);
  const theCloud =
    useRef<THREE.Points<BufferGeometry, Material | Material[]>>(null);

  const theThing =
    useRef<THREE.Mesh<BufferGeometry, Material | Material[]>>(null);
  useEffect(() => {
    document.body.onscroll = animate;

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  function animate() {
    if (allStars.current && theThing.current) {
      allStars.current.rotation.x = 0 - window.scrollY / 1000;
      allStars.current.rotation.y = 0 - window.scrollY / 5500;
    }
  }

  return (
    <Canvas id="canvas" className="z-0">
      <Sparkles ref={allStars} count={5000} speed={0.1} size={1} scale={10} />

      <Cloud
        ref={theCloud}
        opacity={0.2}
        depth={10}
        segments={60}
        width={10}
        color="0x000000"
      />
      {/* <ambientLight /> */}
      <pointLight intensity={2.5} position={[2, 5, 4]} />
    </Canvas>
  );
};
