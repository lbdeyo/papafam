import React from "react";
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {Mesh, MeshPhysicalMaterial} from "three";

export const Thing = () => {
  const obj = useLoader(OBJLoader, "/thing.obj");

  const material = new MeshPhysicalMaterial({color: 0x000000});

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
    }
  });

  return <primitive object={obj} />;
};
