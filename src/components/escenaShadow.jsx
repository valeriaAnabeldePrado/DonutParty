"use client";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, Debug } from "@react-three/cannon";
import { EscenaExp } from "./escenaExp";

export function PlaneM({
  children,
  type,
  args,
  mass,
  position,
  scale,
  rotation,
}) {
  const [planoMasa] = usePlane(() => ({
    type,
    args,
    mass,
    position,
    scale,
    rotation,
  }));
  return (
    <>
      <group ref={planoMasa}>{children}</group>
    </>
  );
}

export default function EscenaShadow({ contador }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ height: "100vh" }}
      camera={{ position: [-4, 4, 10], fov: 50 }}
    >
      <ambientLight intensity={0.1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.5}
        intensity={1}
        castShadow
        penumbra={1}
      />

      <Physics
        broadphase="SAP"
        gravity={[0, -10, 0]}
        frictionGravity={[0, 1, 0]}
        defaultContactMaterial={{ restitution: 0.3 }}
      >
        <EscenaExp contador={contador} />
      </Physics>
    </Canvas>
  );
}
