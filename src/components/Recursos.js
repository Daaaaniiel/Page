import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import FloatingTranslatorButton from "./FloatingTranslatorButton";
import { useIdioma } from "./TraductorGeneral";

const Recursos = () => {
  const { traducido, traducciones } = useIdioma();

  const textos = {
    titulo: "Recursos de Ayuda",
    parrafoIntro: "A veces solo necesitamos alguien con quien hablar. Nuestro chatbot está disponible para escucharte y brindarte orientación emocional cuando más lo necesites.",
    parrafoBot: "El chatbot puede responder a tus mensajes de forma empática. Está diseñado para ayudarte a expresar lo que sientes y orientarte si estás pasando por momentos de ansiedad, estrés o tristeza.",
    invitacion: "¿Te gustaría hablar ahora?",
    boton: "Probar ChatBot",
    subtitulo: "Haz clic en el botón y comienza a conversar. Es privado, anónimo y accesible en cualquier momento.",
    titulo1: "No estás solo",
    titulo2: "¿Cómo funciona el ChatBot?"
  };

  const t = (key) => (traducido ? traducciones[key] || textos[key] : textos[key]);

  return (
    <section
      id="recursos"
      style={{
        backgroundImage: `url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4rem 0",
        color: "black"
      }}
    >
      <Container>
        <h2 className="text-center mb-4 bg-white bg-opacity-75 p-2 rounded">{t("titulo")}</h2>

        <div className="text-center mb-5">
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-bot-chat_114360-5522.jpg"
            alt="Imagen de apoyo emocional con chatbot"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>

        <Row className="mb-4 g-4">
          <Col md={6}>
            <Card className="h-100 shadow border-0 bg-white bg-opacity-75">
              <Card.Body>
                <Card.Title className="text-primary">{t("titulo1")}</Card.Title>
                <Card.Text>{t("parrafoIntro")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow border-0 bg-white bg-opacity-75">
              <Card.Body>
                <Card.Title className="text-primary">{t("titulo2")}</Card.Title>
                <Card.Text>{t("parrafoBot")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5 bg-white bg-opacity-75 p-3 rounded">
          <h3>{t("invitacion")}</h3>
          <p>{t("subtitulo")}</p>
          <Button
            className="btn btn-success btn-lg mt-2"
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
          >
            {t("boton")}
          </Button>
        </div>
      </Container>

      <FloatingTranslatorButton textos={textos} />
    </section>
  );
};

export default Recursos;


