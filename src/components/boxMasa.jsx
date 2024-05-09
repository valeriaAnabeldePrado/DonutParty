"use client";
import React, { Children } from "react";
import { useBox } from "@react-three/cannon";

const BoxMasa = ({ children, type, args, mass, position, scale, rotation }) => {
  const [boxCollaider, boxCollaiderAPI] = useBox(() => ({
    type,
    args,
    mass,
    position,
    scale,
    rotation,
  }));

  return <group ref={boxCollaider}>{children}</group>;
};

export default BoxMasa;
