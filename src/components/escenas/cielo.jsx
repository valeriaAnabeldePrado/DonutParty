"use client";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient, Depth } from "lamina";

const Cielo = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[80, 80, 80]}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Depth
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />

          <Gradient colorA={"#737DFE"} colorB={"#FFCAC9"} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};

export default Cielo;
