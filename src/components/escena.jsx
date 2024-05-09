"use client";
import "./style.css";
import { Physics, Debug } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import BoxMasa from "./boxMasa";

const Escena = () => {
  return (
    <Canvas camera={[5, 5, 5]} style={{ height: "100vh" }}>
      <Physics
        broadphase="SAP"
        gravity={[0, -5, 0]}
        frictionGravity={[0, 1, 0]}
        defaultContactMaterial={{ restitution: 0.2 }}
      >
        <Debug>
          <BoxMasa
            args={[1, 1, 1]}
            mass={1}
            type={"Dynamic"}
            position={[0, 3, 0]}
            rotation={[0, 0, 0]}
            scale={[3]}
          >
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          </BoxMasa>
          <BoxMasa
            args={[120, 1, 120]}
            mass={1}
            type={"Static"}
            position={[0, -3, 0]}
            rotation={[0, 0, 0]}
            scale={[0, 0, 0]}
          >
            <mesh>
              <boxGeometry args={[120, 1, 120]} />
              <meshNormalMaterial />
            </mesh>
          </BoxMasa>
          <Environment preset="city" />
        </Debug>
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default Escena;
