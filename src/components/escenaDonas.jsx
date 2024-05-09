"use client";
import "./style.css";
import { Physics, Debug } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BoxMasa from "./boxMasa";
import React from "react";
import Dona from "./dona";
import CylinderMasa from "./cylinderMasa";

const EscenaDonas = () => {
  return (
    <>
      <Canvas
        camera={[7.3, -6.9, 4.9]}
        rotation={[63.5, 0, 46.6]}
        style={{ height: "100vh" }}
      >
        <Physics
          broadphase="SAP"
          gravity={[0, -10, 0]}
          frictionGravity={[0, 1, 0]}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          {/* <Debug> */}
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
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[-4, 2, 0]}
            rotation={[0, 0, 0]}
            scale={[24, 24, 24]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[0, 5, 0]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[-3, 8, 0]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[-1, 10, 1]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[-4, 10, 0]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            position={[-3, 10, -2]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <CylinderMasa
            args={[1.6 / 2, 1.6 / 2, 0.6]}
            mass={1}
            //type={"Static"}
            type={"Dynamic"}
            //XYZ
            position={[-1, 3, 1]}
            rotation={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <Dona />
          </CylinderMasa>
          <Environment preset="city" />
          {/* </Debug> */}
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default EscenaDonas;
