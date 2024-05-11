"use client";
import { useCylinder } from "@react-three/cannon";
import React, { children } from "react";

const CylinderMasa = ({
  children,
  type,
  args,
  mass,
  position,
  scale,
  rotation,
}) => {
  const [cylinderCollaider, cylinderCollaiderAPI] = useCylinder(() => ({
    type,
    args,
    mass,
    position,
    scale,
    rotation,
  }));
  return (
    <group
      ref={cylinderCollaider}
      onClick={() => {
        cylinderCollaiderAPI.applyImpulse([0, 2, -7], [0, 0, 0]);
      }}
    >
      {children}
    </group>
  );
};

export default CylinderMasa;
