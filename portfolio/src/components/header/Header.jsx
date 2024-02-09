import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Banner from "../banner/Banner";
import "./header.css";

const Header = () => {
  return (
    <div id="header" className="fixed-top">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            DevWorksfolio
            {/* <img
                src={images}
                width="60"
                height="50"
                className="d-inline-block align-top"
                alt="React"
              /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#link">Service</Nav.Link>
              <Nav.Link href="#link">Testimonials</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>

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
