import React, { useState } from "react";
import { Row, Col, Card, Collapse, Button } from "react-bootstrap";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

const Consejos = () => {
  const [open, setOpen] = useState(null);
  const { traducido, traducciones } = useIdioma();

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const textos = {
    titulo: "🧠 Consejos de Salud Mental",
    intro:
      "Si sientes que estas atravesando una situación díficil, aquí te damos algunos consejos que te pueden ayudar:",
    consejo1:
      "- Compartir lo que sientes con alguien de confianza alivia el peso emocional.\n- Busca a alguien que escuche sin juzgar ni criticar y que respete tus pensamientos.",
    consejo2:
      "- Trabajadores sociales o líderes comunitarios que pueden ayudarte a lidiar con la situación.\n- En muchos centros de salud hay atención psicológica gratuita.",
    consejo3:
      "- Mantén tu cuerpo sano, descansa, aliméntate bien.\n- Encuentra actividades que te ayuden a despejar tu mente como leer, caminar o escuchar música.",
    consejo4:
      "- No está mal aprender a decir 'no' y aléjate de personas que te hacen daño.\n- Tienes derecho libremente a vivir sin violencia ni presión.",
    consejo5:
      "- Participa en grupos comunitarios o fundaciones locales.\n- Hablar con personas que pasaron por lo mismo puede ayudarte a sanar.",
    consejo6:
      "- La violencia nunca se justifica.\n- No es tu culpa y tienes derecho a vivir en paz y con dignidad."
  };

  const t = (key) => (traducido ? traducciones[key] || textos[key] : textos[key]);

  const consejosData = [
    {
      titulo: "Habla con alguien de confianza",
      color: "primary",
      key: "consejo1"
    },
    {
      titulo: "Busca apoyo profesional",
      color: "success",
      key: "consejo2"
    },
    {
      titulo: "Prioriza tu autocuidado",
      color: "warning",
      key: "consejo3"
    },
    {
      titulo: "Establece límites claros",
      color: "secondary",
      key: "consejo4"
    },
    {
      titulo: "Conéctate con redes de apoyo",
      color: "danger",
      key: "consejo5"
    },
    {
      titulo: "Recuerda: no eres responsable",
      color: "dark",
      key: "consejo6"
    }
  ];

  return (
    <section
      id="consejos"
      style={{
        backgroundImage: `url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4rem 2rem",
        color: "#000"
      }}
    >
      <div className="text-center mb-4">
        <h2 style={{ color: "#000" }}>{t("titulo")}</h2>
      </div>
      <p
        className="text-center mb-5 fs-5"
        style={{ color: "#000", maxWidth: "800px", margin: "0 auto" }}
      >
        {t("intro")}
      </p>

      <Row className="g-4">
        {consejosData.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <Card.Title className={`text-${item.color}`}>{item.titulo}</Card.Title>
                <Collapse in={open === index}>
                  <div>
                    <Card.Text style={{ whiteSpace: "pre-line" }}>
                      {t(item.key)}
                    </Card.Text>
                  </div>
                </Collapse>
                <div className="text-end">
                  <Button
                    variant={`outline-${item.color}`}
                    size="sm"
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

      <FloatingTranslatorButton textos={textos} />
    </section>
  );
};

export default Consejos;
