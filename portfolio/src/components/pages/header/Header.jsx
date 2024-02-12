import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldAddClass = scrollPosition > 0; // You can adjust this value based on when you want the background color to change

      setIsScrolled(shouldAddClass);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className={`fixed-top ${isScrolled ? "header-scroll" : ""}`}
    >
      <Navbar expand="lg" className={isScrolled ? "bg-black" : ""}>
        <Container>
          <Navbar.Brand href="#banner" className="logo">
            DevWorksFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#banner">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Service</Nav.Link>
              <Nav.Link href="#work">Portfolio</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Drop 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Drop 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drop 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
