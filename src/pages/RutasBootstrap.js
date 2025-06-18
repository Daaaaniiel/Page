import React from "react";
import { Container } from "react-bootstrap";

export function FactoresRuralesPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary mb-4">Salud Mental en Zonas Rurales</h2>
      <p>Explora los factores sociales, económicos y culturales que afectan la salud mental de quienes viven en comunidades rurales.</p>
    </Container>
  );
}

export function AlertasPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-danger mb-4">Señales de Alerta</h2>
      <p>Identifica señales como control excesivo, aislamiento, miedo, cambios emocionales o físicos inesperados.</p>
    </Container>
  );
}

export function RecursosPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-success mb-4">Recursos de Ayuda</h2>
      <p>Incluye centros comunitarios, líderes locales, líneas de emergencia y el uso del chatbot Alliy.</p>
    </Container>
  );
}

export function ConsejosPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-info mb-4">Consejos de Salud Mental</h2>
      <p>Respira, habla con alguien, duerme bien, cuida tu cuerpo, y no tengas miedo de buscar ayuda profesional.</p>
    </Container>
  );
}

export function ChatbotPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-warning mb-4">Asistente Virtual Alliy</h2>
      <p>Este espacio está diseñado para que puedas interactuar con Alliy, nuestro asistente virtual que te acompaña en situaciones difíciles.</p>
    </Container>
  );
}
