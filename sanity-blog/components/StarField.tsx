import {Sparkles, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {useRef, useEffect} from "react";
import {
  BufferGeometry,
  Material,
  MeshLambertMaterial,
  PointLight,
  TextureLoader,
  TorusGeometry,
} from "three";

export const StarField = () => {
  const allStars =
    useRef<THREE.Points<BufferGeometry, Material | Material[]>>(null);
  const knot = useRef<THREE.Mesh>(null);

  useEffect(() => {
    document.body.onscroll = animate;

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  function animate() {
    if (allStars.current && knot.current) {
      allStars.current.rotation.x = 0 - window.scrollY / 1000;
      allStars.current.rotation.y = 0 - window.scrollY / 5500;

      knot.current.rotation.x = 0 - window.scrollY / 1000;
      knot.current.rotation.y = 0 - window.scrollY / 5500;
    }
  }

  return (
    <Canvas id="canvas" className="z-0">
      <Sparkles ref={allStars} count={5000} speed={0.1} size={1} scale={10} />
      {/* <ambientLight /> */}
      <pointLight intensity={1.5} position={[2, 5, 4]} />
      <mesh ref={knot} position={[0, 1, -1]}>
        <torusKnotGeometry args={[2.65, 0.4, 32, 64]} />
        <meshPhongMaterial color={0x333333} />
      </mesh>
    </Canvas>
  );
};
