import React from "react";
import "./contact.css";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact paralax-mf footer-paralax bg-image sect-mt4 route"
    >
      <div className="overlay-mf" />
      <Container>
        <Row>
          <Col>
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <Col>
                  <Col md={6}>
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <Form>
                        {/* your name */}
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        {/* end of code */}

                        {/* your subject */}
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Your Subject"
                          />
                        </Form.Group>
                        {/* end of code */}

                        {/* your email */}
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        {/* end of the code */}

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                          />
                        </Form.Group>
                      </Form>

                      <div className="col-md-12 text-center my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button
                          type="submit"
                          className="button button-a button-big button-rouded"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt" /> 329 WASHINGTON ST
                          BOSTON, MA 02108
                        </li>
                        <li>
                          <span className="bi bi-phone" /> (617) 557-0089
                        </li>
                        <li>
                          <span className="bi bi-envelope" />{" "}
                          contact@example.com
                        </li>
                      </ul>
                    </div>
                    {/* <div className="socials">
                      <ul>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="bi bi-facebook" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="bi bi-instagram" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="bi bi-twitter" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="bi bi-linkedin" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </Col>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
