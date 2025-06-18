import React, { useState } from "react";
import { Row, Col, Card, Collapse, Button, Container } from "react-bootstrap";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

import imgHabla from "../assets/habla.png";
import imgProfesional from "../assets/profesional.png";
import imgAutocuidado from "../assets/autocuidado.png";
import imgLimites from "../assets/limites.jpg";
import imgRedes from "../assets/comunitario.jpg";
import imgNoCulpa from "../assets/noculpa.jpeg";

const Consejos = () => {
  const [open, setOpen] = useState(null);
  const { traducido, traducciones } = useIdioma();

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const textos = {
    titulo: "Consejos de Salud Mental",
    intro:
      "Si sientes que estas atravesando una situación díficil, aquí te damos algunos consejos que te pueden ayudar:",
    consejo1:
      "- Compartir lo que sientes con alguien de confianza alivia el peso emocional.\n- Busca a alguien que escuche sin juzgar ni criticar y que respete tus pensamientos.",
    consejo2:
      "- Trabajadores sociales o líderes comunitarios que pueden ayudarte a lidiar con la situación.",
    consejo3:
      "- Mantén tu cuerpo sano, descansa, aliméntate bien.\n- Encuentra actividades que te ayuden a despejar tu mente como leer, caminar o escuchar música.",
    consejo4:
      "- Aprender lidiar con situaciones díficiles en la vida para que no tomar malas decisiones.\n- Tienes derecho libremente",
    consejo5:
      "- Participa en grupos comunitarios\n- Hablar con personas que pasaron por lo mismo puede ayudarte a sanar.",
    consejo6:
      "- No es tu culpa y tienes derecho a vivir en paz y con dignidad."
  };

  const t = (key) => (traducido ? traducciones[key] || textos[key] : textos[key]);

  const consejosData = [
    {
      titulo: "Habla con alguien de confianza",
      color: "primary",
      key: "consejo1",
      imagen: imgHabla
    },
    {
      titulo: "Busca apoyo profesional",
      color: "success",
      key: "consejo2",
      imagen: imgProfesional
    },
    {
      titulo: "Prioriza tu autocuidado",
      color: "warning",
      key: "consejo3",
      imagen: imgAutocuidado
    },
    {
      titulo: "Establece límites claros",
      color: "secondary",
      key: "consejo4",
      imagen: imgLimites
    },
    {
      titulo: "Conéctate con redes de apoyo",
      color: "danger",
      key: "consejo5",
      imagen: imgRedes
    },
    {
      titulo: "Recuerda: no eres responsable",
      color: "dark",
      key: "consejo6",
      imagen: imgNoCulpa
    }
  ];

  return (
    <section id="consejos" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-4 display-5 fw-bold">
          {t("titulo")}
        </h2>
        <p className="text-center text-secondary mb-5 fs-5 px-4">
          {t("intro")}
        </p>

        <Row className="g-4">
          {consejosData.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  alt={item.titulo}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="bg-white bg-opacity-75">
                  <Card.Title className={`text-${item.color} fw-bold fs-4`}>
                    {item.titulo}
                  </Card.Title>
                  <Collapse in={open === index}>
                    <div>
                      <Card.Text
                        className="text-dark fw-light lh-lg mt-2"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {t(item.key)}
                      </Card.Text>
                    </div>
                  </Collapse>
                  <div className="text-end">
                    <Button
                      variant={`outline-${item.color}`}
                      size="sm"
                      className="mt-3 rounded-pill px-4"
                      onClick={() => toggle(index)}
                      aria-controls={`collapse-${index}`}
                      aria-expanded={open === index}
                    >
                      {open === index ? "Ocultar" : "Ver más"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <FloatingTranslatorButton textos={textos} />
    </section>
  );
};

export default Consejos;
