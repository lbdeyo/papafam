import {Cloud, Sparkles, Stars} from "@react-three/drei";
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
  const theCloud =
    useRef<THREE.Points<BufferGeometry, Material | Material[]>>(null);
  // const knot = useRef<THREE.Mesh>(null);
  // const knot2 = useRef<THREE.Mesh>(null);

  useEffect(() => {
    document.body.onscroll = animate;

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  function animate() {
    if (allStars.current && theCloud.current) {
      // && knot.current && knot2.current) {
      allStars.current.rotation.x = 0 - window.scrollY / 1000;
      allStars.current.rotation.y = 0 - window.scrollY / 5500;

      // knot2.current.rotation.x = 180 - window.scrollY / 700;
      // knot2.current.rotation.y = 180 - window.scrollY / 5500;
    }
  }

  return (
    <Canvas id="canvas" className="z-0">
      <Sparkles ref={allStars} count={5000} speed={0.1} size={1} scale={10} />
      <Cloud
        ref={theCloud}
        opacity={0.2}
        depth={3}
        width={4}
        color="0x000000"
      />
      {/* <ambientLight /> */}
      <pointLight intensity={1} position={[2, 5, 4]} />
      {/* <mesh ref={knot} position={[0, 1, -1]}>
        <torusGeometry args={[2.75, 0.3, 32, 64]} />
        <meshPhongMaterial color={0x333333} />
      </mesh>
      <mesh ref={knot2} position={[0, 1, -1]}>
        <torusGeometry args={[1.25, 0.3, 32, 64]} />
        <meshPhongMaterial color={0x333333} />
      </mesh> */}
    </Canvas>
  );
};
