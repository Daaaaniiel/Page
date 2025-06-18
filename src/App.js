import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavbarAlliy from "./components/NavbarAlliy";
import FooterAlliy from "./components/FooterAlliy";
import HeroSection from "./components/HeroSection";
import FactoresRurales from "./components/FactoresRurales";
import Alertas from "./components/Alertas";
import Recursos from "./components/Recursos";
import Consejos from "./components/Consejos";
import { IdiomaProvider } from "./components/TraductorGeneral";

function App() {
  return (
    <IdiomaProvider>
      <Router>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <NavbarAlliy />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/factores" element={<FactoresRurales />} /> 
              <Route path="/alertas" element={<Alertas />} />
              <Route path="/recursos" element={<Recursos />} />
              <Route path="/consejos" element={<Consejos />} />
            </Routes>
          </main>
          <FooterAlliy />
        </div>
      </Router>
    </IdiomaProvider>
  );
}

export default App;


