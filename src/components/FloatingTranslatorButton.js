import React from "react";
import { useIdioma } from "./TraductorGeneral";
import { Button } from "react-bootstrap";

const FloatingTranslatorButton = ({ textos }) => {
  const { traducido, cambiarIdioma } = useIdioma();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999
      }}
    >
      <Button
        variant={traducido ? "warning" : "primary"}
        onClick={() => cambiarIdioma(textos)}
      >
        {traducido ? "Ver en Español" : "Traducir al Kichwa"}
      </Button>
    </div>
  );
};

export default FloatingTranslatorButton;