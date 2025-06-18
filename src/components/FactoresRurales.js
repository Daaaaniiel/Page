import React, { useState } from "react";
import { Row, Col, Card, Collapse, Button, Container } from "react-bootstrap";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

import imgAislamiento from "../assets/aislamiento.jpg";
import imgPobreza from "../assets/pobreza.jpeg";
import imgAcceso from "../assets/salud.png";
import imgEstigma from "../assets/estigma.jpeg";

const FactoresRurales = () => {
  const [open, setOpen] = useState(null);
  const { traducido, traducciones } = useIdioma();

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const textos = {
    titulo: "Factores que afectan la salud mental en comunidades rurales",
    intro:
      "Las personas que viven en comunidades rurales enfrentan retos particulares que pueden afectar su salud emocional y psicológica. Reconocer estos factores es esencial para fomentar el bienestar en estas zonas.",
    aislamiento:
      "La lejanía de los centros urbanos puede limitar el acceso a servicios básicos, incluyendo salud mental. Esto puede generar sentimientos de soledad y desconexión.",
    pobreza:
      "La falta de oportunidades laborales y la precariedad económica generan estrés constante, inseguridad y baja autoestima.",
    accesoSalud:
      "En muchas comunidades rurales no existen centros de salud mental, ni profesionales disponibles, lo que impide un tratamiento oportuno.",
    estigma:
      "Muchas veces los problemas de salud mental son minimizados, ignorados o mal interpretados, impidiendo que las personas busquen ayuda."
  };

  const t = (clave) => (traducido ? traducciones[clave] || textos[clave] : textos[clave]);

  const factores = [
    {
      titulo: "Aislamiento geográfico y social",
      clave: "aislamiento",
      color: "primary",
      imagen: imgAislamiento
    },
    {
      titulo: "Desempleo y pobreza",
      clave: "pobreza",
      color: "danger",
      imagen: imgPobreza
    },
    {
      titulo: "Acceso limitado a servicios de salud",
      clave: "accesoSalud",
      color: "warning",
      imagen: imgAcceso
    },
    {
      titulo: "Estigmas culturales y desinformación",
      clave: "estigma",
      color: "success",
      imagen: imgEstigma
    }
  ];

  return (
    <section id="factores" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-4 display-5 fw-bold">
          {t("titulo")}
        </h2>
        <p className="text-center text-secondary mb-5 fs-5 px-4">
          {t("intro")}
        </p>
        <Row className="g-4">
          {factores.map((factor, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={factor.imagen}
                  style={{ height: "220px", objectFit: "cover" }}
                  alt={factor.titulo}
                />
                <Card.Body className="bg-white bg-opacity-75">
                  <Card.Title className={`text-${factor.color} fw-bold fs-4`}>
                    {factor.titulo}
                  </Card.Title>
                  <Collapse in={open === index}>
                    <div>
                      <Card.Text className="text-dark fw-light lh-lg mt-2">
                        {t(factor.clave)}
                      </Card.Text>
                    </div>
                  </Collapse>
                  <div className="text-end">
                    <Button
                      variant={`outline-${factor.color}`}
                      size="sm"
                      className="mt-3 rounded-pill px-4"
                      onClick={() => toggle(index)}
                      aria-controls={`collapse-${index}`}
                      aria-expanded={open === index}
                    >
                      {open === index ? "Ocultar" : "Leer más"}
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

export default FactoresRurales;



