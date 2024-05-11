"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

const Dona = ({ props }) => {
  const { nodes, materials } = useGLTF("/dona8.glb");

  return (
    <>
      <group {...props} scale={7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["donut.002"]}
          position={[0, 0.121, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["icing.002"]}
          position={[0, 0.121, 0]}
        />
        <group
          position={[0.076, 0.082, 0.009]}
          rotation={[1.448, 0.073, 3.007]}
          scale={0.141}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["sprinkles_bake.002"]}
            position={[0.507, 0.096, -0.317]}
          />
        </group>
      </group>
    </>
  );
};
useGLTF.preload("/dona8.glb");
export default Dona;
