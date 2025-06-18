import React from "react";
import { Container } from "react-bootstrap";
import background from "../assets/fondo.png";
import { useIdioma } from "./TraductorGeneral";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const HeroSection = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "Bienvenido a Alliy",
    subtitulo:
      "Tu espacio confiable para apoyar la salud mental en comunidades rurales",
    queEs: "¿Qué es Alliy?",
    parrafo1:
      "Alliy es una plataforma diseñada para acompañar a personas que viven en comunidades rurales, brindando orientación emocional, herramientas de autocuidado y acceso a información útil para fortalecer el bienestar mental.",
    objetivo: "Objetivo",
    parrafo2:
      "Contribuir al bienestar emocional en zonas rurales, superando barreras como el aislamiento, la falta de atención especializada y el estigma, mediante contenidos accesibles, empáticos y culturalmente adaptados.",
    contenido: "¿Qué encontrarás aquí?",
    item1: "Factores que afectan la salud mental en zonas rurales.",
    item2: "Señales de alerta para identificar situaciones de riesgo emocional.",
    item3: "Recursos de ayuda disponibles en entornos rurales.",
    item4: "Consejos prácticos para el autocuidado y el manejo del estrés.",
    item5: "ChatBot Alliy: acompaña de forma anónima y segura, disponible 24/7."
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
        padding: "4rem 1rem",
        flexDirection: "column"
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

      {/* Redes sociales con texto */}
<div className="mt-4 text-center" style={{ zIndex: 2 }}>
  <p className="mb-2 fw-semibold" style={{ fontSize: "1.1rem", color: "#000" }}>
    Síguenos en nuestras redes sociales
  </p>
  <div className="d-flex justify-content-center gap-4">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark fs-4 d-flex align-items-center gap-2"
    >
      <FaFacebookF /> Facebook
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark fs-4 d-flex align-items-center gap-2"
    >
      <FaInstagram /> Instagram
    </a>
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark fs-4 d-flex align-items-center gap-2"
    >
      <FaTiktok /> TikTok
    </a>
  </div>
</div>

      <FloatingTranslatorButton textos={textos} />
    </div>
  );
};

export default HeroSection;



