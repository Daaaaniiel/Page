import React from "react";
import { Container } from "react-bootstrap";
import background from "../assets/fondo.png"; // usa tu fondo azul aquí
import { useIdioma } from "./TraductorGeneral";
import FloatingTranslatorButton from "./FloatingTranslatorButton";

const HeroSection = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "Bienvenido a Alliy",
    subtitulo:
      "Tu espacio seguro con información, apoyo y orientación sobre salud mental en casos de violencia",
    queEs: "¿Qué es Alliy?",
    parrafo1:
      "Alliy es una plataforma creada para brindar orientación emocional y educativa a personas que han vivido o están viviendo situaciones de violencia. Nuestro enfoque está en la salud mental, el autocuidado y la prevención.",
    objetivo: "🎯 Objetivo",
    parrafo2:
      "Ser un espacio de apoyo empático y seguro, donde puedas informarte, identificar señales de alerta, conocer tus derechos y acceder a recursos útiles para tu bienestar emocional.",
    contenido: "📚 ¿Qué encontrarás aquí?",
    item1: "Tipos de violencia: conoce las formas en que puede manifestarse.",
    item2: "Señales de alerta: aprende a reconocer síntomas emocionales y físicos.",
    item3: "Recursos de ayuda: accede a orientación y a un chatbot empático.",
    item4: "Consejos: estrategias para cuidar tu salud mental y emocional.",
    item5: "ChatBot: conversación anónima y segura disponible 24/7."
  };

  const t = (clave) => (traducido ? traducciones[clave] || textos[clave] : textos[clave]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          padding: "3rem 2rem",
          borderRadius: "12px",
          maxWidth: "900px",
          width: "100%",
          zIndex: 2,
          boxShadow: "0 0 20px rgba(0,0,0,0.2)"
        }}
      >
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "1px 1px 3px #bbb" }}>
            {t("titulo")}
          </h1>
          <p className="lead mb-5">{t("subtitulo")}</p>

          <div style={{ color: "#000" }}>
            <h2 className="mb-3">{t("queEs")}</h2>
            <p>{t("parrafo1")}</p>

            <h3 className="mt-4 mb-2">{t("objetivo")}</h3>
            <p>{t("parrafo2")}</p>

            <h3 className="mt-4 mb-2">{t("contenido")}</h3>
            <ul style={{ textAlign: "left", paddingLeft: "1.2rem" }}>
              <li>{t("item1")}</li>
              <li>{t("item2")}</li>
              <li>{t("item3")}</li>
              <li>{t("item4")}</li>
              <li>{t("item5")}</li>
            </ul>
          </div>
        </Container>
      </div>

      <FloatingTranslatorButton textos={textos} />
    </div>
  );
};

export default HeroSection;



