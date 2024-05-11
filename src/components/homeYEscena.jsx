"use client";
import React from "react";
import EscenaShadow from "./escenaShadow";
import { useState } from "react";
import "./style.css";

const HomeYEscena = () => {
  const [contador, setContador] = useState(0);
  const [contadorNo, setContadorNo] = useState("No voy");
  const [contaNo, setContaNo] = useState(0);
  const handleclick = () => {
    setContador(contador + 1);
  };
  const handleclickNO = () => {
    setContaNo(contaNo + 1);
    setContadorNo("Xq no?");

    if (contaNo == 2) {
      setContadorNo("Posta?");
    } else if (contaNo >= 3) {
      setContadorNo("Así sos");
    }
  };
  return (
    <>
      <section className="cont-Overlay">
        <h1>jsdnansdajs</h1>
      </section>
      <section className="cont-button">
        <button className="boton boton-si" onClick={handleclick}>
          Si voy
        </button>
        <button className="boton boton-no" onClick={handleclickNO}>
          {contadorNo}
        </button>
      </section>
      <EscenaShadow contador={contador} />
    </>
  );
};

export default HomeYEscena;
