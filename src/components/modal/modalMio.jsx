"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import "../style.css";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../../emailjs.config";
import { useState, useRef } from "react";

const ModalMio = ({ setModal, setConfirmacion }) => {
  const [nombreApellido, setNombreApellido] = useState("");
  const [respuesta, setRespuesta] = useState(false);
  const formM = useRef();
  const handleChange = (event) => {
    setNombreApellido(event.target.value);
  };
  const handleClickNOvoy = () => {
    setConfirmacion(false);
    setModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formM.current,
        EMAILJS_USER_ID
      )
      .then((response) => {
        setRespuesta(true);
        console.log("Correo electrónico enviado:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
    setNombreApellido("");
    setTimeout(() => {
      setConfirmacion(false);
      setModal(false);
    }, 5000);
  };
  return (
    <>
      <div className="cont-fill">
        <div className="cont-modal">
          <h2 className="blanco">Confirmación real</h2>
          <p className="blanco">Si vas escribi tu Nombre y Apellido</p>
          <form onSubmit={handleSubmit} ref={formM}>
            <label htmlFor="nombreApellido"></label>
            <input
              type="text"
              name="nombreApellido"
              value={nombreApellido}
              onChange={handleChange}
            />
            {respuesta ? <p className="blanco">Enviado gracias ❤️</p> : ""}
            <button className="boton padding" type="submit">
              Enviar
            </button>
            <button
              type="button"
              className="boton padding ma"
              onClick={handleClickNOvoy}
            >
              No voy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalMio;
