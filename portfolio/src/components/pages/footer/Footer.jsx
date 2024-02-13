import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="copyright-box">
              <p className="copyright">
                © Copyright <strong>DevWorksFolio</strong>. All Rights Reserved
              </p>
              <div className="credits">
                Designed by
                <a href="https://www.idea2code.com/">Idea2code</a>
              </div>
            </div>
            {/* Scroll-to-top button
            <Button className="scroll-to-top-button" onClick={scrollToTop}>
              &#8593;
            </Button> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
