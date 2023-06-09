"use client";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {
  BufferGeometry,
  Material,
  Mesh,
  TextureLoader,
  TorusKnotGeometry,
} from "three";

export default function TorusKnotComponent() {
  const geom: TorusKnotGeometry = new TorusKnotGeometry(2, 0.4, 100, 64);
  // const moonTexture = new THREE.TextureLoader().load("complexity.jpg");
  const moonTexture = new TextureLoader().load("complexity.jpg");
  const theMesh = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(({clock}) => {
    // const a = clock.getElapsedTime();
    // console.log(a); // the value will be 0 at scene initialization and grow each frame
  });
  return (
    <mesh ref={theMesh} geometry={geom}>
      {/* <torusKnotGeometry /> */}
      <meshBasicMaterial map={moonTexture} />
    </mesh>
  );
}
