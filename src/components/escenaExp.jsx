"use client";
import React from "react";
import Cielo from "./escenas/cielo";
import { OrbitControls } from "@react-three/drei";
import EscenaCubo from "./escenas/escenaCubo";
import GrupoUno from "./donas/grupoDonas";

export const EscenaExp = ({ contador }) => {
  return (
    <>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4} //Arriba
        maxPolarAngle={Math.PI / 3} //Abajo
      />
      <Cielo />
      {contador >= 1 ? <GrupoUno /> : ""}
      {contador >= 2 ? <GrupoUno /> : ""}
      {contador >= 3 ? <GrupoUno /> : ""}
      {contador >= 4 ? <GrupoUno /> : ""}
      {contador >= 5 ? <GrupoUno /> : ""}
      <EscenaCubo />
    </>
  );
};
