"use client";
import React from "react";
import EscenaShadow from "./escenaShadow";
import { useState, Suspense, useEffect } from "react";
import "./style.css";
import LoaderEscena from "./loader/loaderEscena";
import ModalMio from "./modal/modalMio";

const HomeYEscena = () => {
  const [contador, setContador] = useState(0);
  const [contadorNo, setContadorNo] = useState("No voy");
  const [contaNo, setContaNo] = useState(0);
  const [modal, setModal] = useState(false);
  const [confirmacion, setConfirmacion] = useState(true);

  const handleclick = () => {
    setContador(contador + 1);
  };
  const handleclickNO = () => {
    setContaNo(contaNo + 1);
    if (contaNo === 1) {
      setContadorNo("Xq no?");
    } else if (contaNo === 2) {
      setContadorNo("Posta?");
    } else if (contaNo >= 3) {
      setContadorNo("Así sos");
    }
  };
  useEffect(() => {
    if (contador >= 2 && !modal && confirmacion) {
      setModal(true);
    }
  }, [contador]);
  console.log(modal);
  return (
    <>
      <section className="cont-Overlay">
        <section className="cont-overlay-Section">
          <h2 className="textH">Te espero en El Botellón</h2>
          <h2 className="textH">Chacabuco 654, Nueva Córdoba</h2>
          <h2 className="textH">día jueves 16/05, 21hs</h2>
        </section>
      </section>
      <section className="cont-button">
        <h2 className="textH ">Confirmar presencia ❤️</h2>
        <div className="cont-botonetes">
          <button className="boton boton-si" onClick={handleclick}>
            Si voy
          </button>
          <button className="boton boton-no" onClick={handleclickNO}>
            {contadorNo}
          </button>
        </div>
      </section>
      {modal ? (
        <ModalMio setModal={setModal} setConfirmacion={setConfirmacion} />
      ) : (
        ""
      )}
      <Suspense fallback={<LoaderEscena />}>
        <EscenaShadow contador={contador} />
      </Suspense>
    </>
  );
};

export default HomeYEscena;
