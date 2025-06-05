import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Alliylogo.png";

const NavbarAlliy = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={logo}
          alt="Alliy Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span className="fw-bold">Alliy</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/tipos">Tipos</Nav.Link>
          <Nav.Link as={Link} to="/alertas">Alerta</Nav.Link>
          <Nav.Link as={Link} to="/recursos">Recursos</Nav.Link>
          <Nav.Link as={Link} to="/consejos">Consejos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarAlliy;
