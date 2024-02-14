import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
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
                <a
                  href="https://www.idea2code.com/"
                  className="text-decoration-none ms-1"
                >
                  
                  idea2code
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
