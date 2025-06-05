import React, { useState } from "react";
import { Row, Col, Card, Collapse, Button, Container } from "react-bootstrap";
import violencia from "../assets/violencia.jpg";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

const TiposViolencia = () => {
  const [open, setOpen] = useState(null);
  const { traducido, traducciones } = useIdioma();

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const textos = {
    titulo: "Tipos de Violencia",
    intro:
      "La violencia puede tomar muchas formas. Reconocerlas es esencial para protegerse y buscar ayuda. A continuación se describen los tipos más comunes:",
    violenciaFisica:
      "Violencia Física: Cualquier acto que cause daño corporal mediante el uso de la fuerza. Incluye golpes, empujones, quemaduras, uso de armas o cualquier agresión que deje lesiones visibles o no visibles.",
    violenciaPsicologica:
      "Violencia Psicológica o Emocional: Acciones o palabras que dañan la autoestima o estabilidad emocional de una persona. Ejemplos incluyen insultos, humillaciones, amenazas, manipulación emocional y control excesivo.",
    violenciaSexual:
      "Violencia Sexual: Cualquier acto sexual sin consentimiento, bajo presión, manipulación o amenaza. Esto puede incluir tocamientos no deseados, violación o forzar a ver o realizar actos sexuales.",
    violenciaEconomica:
      "Violencia Económica: Control injustificado sobre el dinero y recursos de una persona. Puede manifestarse en negar acceso al dinero, prohibir trabajar o estudiar, o tomar decisiones económicas sin consultar."
  };

  const t = (clave) => (traducido ? traducciones[clave] || textos[clave] : textos[clave]);

  const tipos = [
    {
      titulo: "Violencia Física",
      clave: "violenciaFisica",
      color: "danger"
    },
    {
      titulo: "Violencia Psicológica o Emocional",
      clave: "violenciaPsicologica",
      color: "warning"
    },
    {
      titulo: "Violencia Sexual",
      clave: "violenciaSexual",
      color: "info"
    },
    {
      titulo: "Violencia Económica",
      clave: "violenciaEconomica",
      color: "success"
    }
  ];

  return (
    <section
      id="tipos"
      className="py-5"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "brightness(0.9)"
      }}
    >
      <Container>
        <h2 className="text-center text-primary mb-4 display-5 fw-bold bg-white bg-opacity-75 p-2 rounded">
          {t("titulo")}
        </h2>
        <p className="text-center text-dark mb-5 fs-5 bg-white bg-opacity-75 p-3 rounded">
          {t("intro")}
        </p>
        <Row className="mb-5 justify-content-center">
          <Col md={10} lg={8}>
            <img
              src={violencia}
              alt="Tipos de Violencia"
              className="img-fluid rounded shadow d-block mx-auto border border-3 border-primary"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </Col>
        </Row>
        <Row className="g-4">
          {tipos.map((tipo, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-lg border-0 rounded-4 bg-white bg-opacity-75">
                <Card.Body>
                  <Card.Title className={`text-${tipo.color} fw-bold fs-4 mb-3`}>
                    {tipo.titulo}
                  </Card.Title>
                  <Collapse in={open === index}>
                    <div>
                      <Card.Text className="text-dark fw-light lh-lg">
                        {t(tipo.clave)}
                      </Card.Text>
                    </div>
                  </Collapse>
                  <div className="text-end">
                    <Button
                      variant={`outline-${tipo.color}`}
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

export default TiposViolencia;



