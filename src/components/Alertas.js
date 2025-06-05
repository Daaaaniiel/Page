import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  BsEmojiFrownFill,
  BsPersonXFill,
  BsExclamationTriangleFill,
  BsShieldLockFill,
  BsEyeSlashFill
} from "react-icons/bs";
import { useIdioma } from "./TraductorGeneral";
import FloatingTranslatorButton from "./FloatingTranslatorButton";

const Alertas = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "🚨 Señales de Alerta",
    introduccion:
      "Identificar señales de alerta puede salvar vidas. Estar atentos a estos síntomas es clave para actuar a tiempo:",
    emocional:
      "Cambios emocionales o psicológicos: Ansiedad, tristeza o llanto frecuente sin causa aparente. Miedo constante a desagradar a su pareja o conviviente. Baja autoestima y autocrítica excesiva. Irritabilidad, nerviosismo o agresividad repentina. Dificultad para concentrarse o tomar decisiones.",
    social:
      "Aislamiento social: Se aleja de familiares y amistades. Excusas constantes para no salir o comunicarse. Deja actividades que antes disfrutaba (estudios, hobbies, trabajo).",
    fisico:
      "Cambios físicos o de apariencia: Ropa que cubre demasiado el cuerpo, incluso en clima caluroso. Moretones, heridas o quemaduras mal explicadas. Pérdida o aumento de peso repentino. Mal cuidado personal (deja de arreglarse o asearse).",
    dependencia:
      "Conductas de dependencia o sumisión: Consulta todo con su pareja antes de hablar o decidir. Muestra miedo o nerviosismo al recibir mensajes o llamadas. Justifica constantemente las actitudes agresivas de su pareja.",
    control:
      "Signos de control o vigilancia: Su pareja revisa su celular, redes o movimientos. Le restringen el dinero o el acceso a transporte. Le impiden trabajar, estudiar o ver a otras personas."
  };

  const t = (clave) => (traducido ? traducciones[clave] || textos[clave] : textos[clave]);

  const alertas = [
    {
      titulo: "Cambios emocionales o psicológicos",
      clave: "emocional",
      color: "danger",
      icono: <BsEmojiFrownFill size={24} className="me-2" />
    },
    {
      titulo: "Aislamiento social",
      clave: "social",
      color: "warning",
      icono: <BsPersonXFill size={24} className="me-2" />
    },
    {
      titulo: "Cambios físicos o de apariencia",
      clave: "fisico",
      color: "info",
      icono: <BsExclamationTriangleFill size={24} className="me-2" />
    },
    {
      titulo: "Conductas de dependencia o sumisión",
      clave: "dependencia",
      color: "secondary",
      icono: <BsShieldLockFill size={24} className="me-2" />
    },
    {
      titulo: "Signos de control o vigilancia",
      clave: "control",
      color: "dark",
      icono: <BsEyeSlashFill size={24} className="me-2" />
    }
  ];

  return (
    <section
      id="alertas"
      style={{
        backgroundImage: `url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4rem 2rem"
      }}
    >
      <div className="text-center mb-4">
        <h2 style={{ color: "#000" }}>{t("titulo")}</h2>
      </div>
      <p
        className="text-center mb-5 fs-5"
        style={{ color: "#000", maxWidth: "800px", margin: "0 auto" }}
      >
        {t("introduccion")}
      </p>
      <Row className="g-4 mt-4">
        {alertas.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card
              bg={item.color}
              text="white"
              className="h-100 shadow border-0"
            >
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  {item.icono}
                  {item.titulo}
                </Card.Title>
                <ul className="mt-3">
                  {t(item.clave)
                    .split(". ")
                    .filter((line) => line.trim())
                    .map((linea, idx) => (
                      <li key={idx} style={{ lineHeight: "1.6" }}>
                        {linea.trim()}
                      </li>
                    ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <FloatingTranslatorButton textos={textos} />
    </section>
  );
};

export default Alertas;


