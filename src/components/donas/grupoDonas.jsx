import React from "react";
import CylinderMasa from "./cilinderDonas";
import Dona from "./dona";

const GrupoUno = () => {
  const donas = Array.from({ length: 30 }, (_, index) => (
    <CylinderMasa
      key={index}
      args={[1.6 / 2, 1.6 / 2, 0.6]}
      mass={1}
      Stype={"Dynamic"}
      //type={"Static"}
      position={[getRandomNumber(0, 8), 5, getRandomNumber(-3, 0)]}
      rotation={[0, 0, 0]}
      scale={[24, 24, 24]}
    >
      <Dona receiveShadow />
    </CylinderMasa>
  ));

  return <>{donas}</>;
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default GrupoUno;
