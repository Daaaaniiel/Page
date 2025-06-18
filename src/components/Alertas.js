import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useIdioma } from "./TraductorGeneral";
import FloatingTranslatorButton from "./FloatingTranslatorButton";

// Imágenes personalizadas por cada alerta
import emocionalImg from "../assets/emocional.jpg";
import aislamientoImg from "../assets/aislamientos.png";
import fisicoImg from "../assets/fisico.jpeg";
import dependenciaImg from "../assets/dependencia.png";
import controlImg from "../assets/control.jpg";

const Alertas = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "Señales de Alerta en zonas rurales",
    introduccion:
      "Reconocer signos de deterioro en la salud mental puede marcar la diferencia. En comunidades rurales, estas señales suelen estar invisibilizadas o normalizadas. Aquí te mostramos algunas importantes:",
    emocional:
      "Ansiedad, tristeza persistente o cambios repentinos de ánimo. Problemas de sueño, irritabilidad o sensación constante de preocupación. Dificultad para disfrutar cosas cotidianas.",
    social:
      "Aislamiento de la comunidad. Evita encuentros, asambleas o celebraciones. Prefiere estar solo o se muestra apático ante las visitas.",
    fisico:
      "Malestar físico recurrente sin causa médica clara. Pérdida o aumento de peso, fatiga constante o cambios notables en la higiene personal.",
    dependencia:
      "Personas que se muestran inseguras, que dependen de otros para tomar decisiones básicas o que sienten que no pueden hacer nada sin aprobación.",
    control:
      "Familia o entorno que limita su libertad, impone tareas forzadas, le impide buscar ayuda médica o lo desacredita emocionalmente."
  };

  const t = (clave) => (traducido ? traducciones[clave] || textos[clave] : textos[clave]);

  const alertas = [
    {
      titulo: "Cambios emocionales o psicológicos",
      clave: "emocional",
      imagen: emocionalImg
    },
    {
      titulo: "Aislamiento social",
      clave: "social",
      imagen: aislamientoImg
    },
    {
      titulo: "Síntomas físicos sin explicación",
      clave: "fisico",
      imagen: fisicoImg
    },
    {
      titulo: "Conductas de dependencia emocional",
      clave: "dependencia",
      imagen: dependenciaImg
    },
    {
      titulo: "Limitaciones o control del entorno",
      clave: "control",
      imagen: controlImg
    }
  ];

  return (
    <section
      id="alertas"
      style={{
        background: "#f7f9fc",
        padding: "4rem 2rem"
      }}
    >
      <div className="text-center mb-4">
        <h2 className="text-primary fw-bold">{t("titulo")}</h2>
      </div>
      <p
        className="text-center mb-5 fs-5 text-muted"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {t("introduccion")}
      </p>
      <Row className="g-4">
        {alertas.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src={item.imagen}
                alt={item.titulo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-dark fw-bold fs-5">
                  {item.titulo}
                </Card.Title>
                <ul className="mt-3 text-dark lh-lg">
                  {t(item.clave)
                    .split(". ")
                    .filter((line) => line.trim())
                    .map((linea, idx) => (
                      <li key={idx}>{linea.trim()}</li>
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



