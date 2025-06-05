import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const ChatAlliy = () => {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const manejarMensaje = () => {
    if (mensaje.toLowerCase().includes("ayuda")) {
      setRespuesta("Si necesitas ayuda urgente, llama al 1-800-123-456.");
    } else if (mensaje.toLowerCase().includes("hola")) {
      setRespuesta("Hola, soy Alliy. Estoy aquí para escucharte.");
    } else {
      setRespuesta("Gracias por tu mensaje. Te responderé pronto.");
    }
    setMensaje("");
  };

  return (
    <section id="chat" className="my-5">
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              
              {respuesta && <Card.Text><strong>Alliy:</strong> {respuesta}</Card.Text>}
              <Form.Control
                type="text"
                placeholder="Escribe tu mensaje..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="my-2"
              />
              <div className="text-end">
                <Button onClick={manejarMensaje}>Enviar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ChatAlliy;
