"use client";
import React from "react";
import { PlaneM } from "../escenaShadow";
const EscenaCubo = () => {
  return (
    <>
      {/* Plano escena, piso */}
      <PlaneM
        args={[100, 100, 1]}
        mass={1}
        type={"Static"}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <mesh receiveShadow>
          <planeGeometry args={[100, 100]} receiveShadow />
          <shadowMaterial color="#171717" opacity={0.5} />
        </mesh>
      </PlaneM>
      {/* Plano escena, pared fondo */}
      <PlaneM
        args={[100, 100, 1]}
        mass={1}
        type={"Static"}
        position={[0, 0, -10]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
      >
        <mesh>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial color="#171717" opacity={0.5} />
        </mesh>
      </PlaneM>
      {/* Plano escena, pared derecha */}
      <PlaneM
        args={[100, 100, 1]}
        mass={1}
        type={"Static"}
        position={[10, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1]}
      >
        <mesh>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial color="#171717" opacity={0.5} />
        </mesh>
      </PlaneM>
    </>
  );
};

export default EscenaCubo;
