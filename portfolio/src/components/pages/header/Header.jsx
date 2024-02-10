import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

const Header = () => {
  return (
    <div id="header" className="fixed-top">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            DevWorksFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#banner">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Service</Nav.Link>
              <Nav.Link href="#testimonial">Testimonials</Nav.Link>
              <Nav.Link href="#work">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Drop 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Drop 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drop 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
