import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

const Recursos = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "Recursos de Ayuda",
    parrafoIntro:
      "A veces solo necesitamos alguien con quien hablar. Nuestro chatbot está disponible para escucharte y brindarte orientación emocional cuando más lo necesites.",
    parrafoBot:
      "El chatbot puede responder a tus mensajes de forma empática. Está diseñado para ayudarte a expresar lo que sientes y orientarte si estás pasando por momentos de ansiedad, estrés o tristeza.",
    invitacion: "¿Te gustaría hablar ahora?",
    boton: "Probar ChatBot",
    subtitulo:
      "Haz clic en el botón y comienza a conversar. Es privado, anónimo y accesible en cualquier momento.",
    titulo1: "No estás solo",
    titulo2: "¿Cómo funciona el ChatBot?"
  };

  const t = (key) => (traducido ? traducciones[key] || textos[key] : textos[key]);

  return (
    <section id="recursos" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-4 display-5 fw-bold bg-white bg-opacity-75 p-2 rounded">
          {t("titulo")}
        </h2>

        <div className="text-center mb-5">
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-bot-chat_114360-5522.jpg"
            alt="Imagen de apoyo emocional con chatbot"
            className="img-fluid rounded shadow border border-primary"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>

        <Row className="mb-5 g-4">
          <Col md={6}>
            <Card className="h-100 shadow-lg border-0 bg-white bg-opacity-75 rounded-4">
              <Card.Body>
                <Card.Title className="text-success fw-bold fs-4 mb-3">
                  {t("titulo1")}
                </Card.Title>
                <Card.Text className="text-dark fs-5">{t("parrafoIntro")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-lg border-0 bg-white bg-opacity-75 rounded-4">
              <Card.Body>
                <Card.Title className="text-info fw-bold fs-4 mb-3">
                  {t("titulo2")}
                </Card.Title>
                <Card.Text className="text-dark fs-5">{t("parrafoBot")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Card className="shadow-lg border-0 bg-white bg-opacity-75 rounded-4 text-center p-4">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-4 mb-3">
                  {t("invitacion")}
                </Card.Title>
                <Card.Text className="text-dark mb-4 fs-5">{t("subtitulo")}</Card.Text>

                <Button
                  variant="primary"
                  size="lg"
                  href="https://tudominio.com/alliy.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-pill px-4"
                >
                  Descargar App (APK)
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FloatingTranslatorButton textos={textos} />
    </section>
  );
};

export default Recursos;
