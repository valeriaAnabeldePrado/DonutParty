"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import Image from "next/image";
import pepa from "../../../public/pepa.png";

const LoaderMio = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderContainer">
          <h1>Te invito a mi cumple!</h1>
          <h2>Es el día jueves 17/05</h2>
          <div className="cont-img">
            <Image src={pepa} alt="pepa" fill className="pepa" />
          </div>
          <div className="loader"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoaderMio;
