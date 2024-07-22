import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";

export const Map = () => {
  const map = useGLTF("models/map.glb");

  useEffect(() => {
    map.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <primitive object={map.scene} />
    </RigidBody>
  );
};

useGLTF.preload("models/map.glb");
