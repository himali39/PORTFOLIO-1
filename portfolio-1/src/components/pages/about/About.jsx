import React from "react";
import "./about.css";
import aboutImage from "../../../img/about.jpg";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" className="about-mf sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <Col className="box-shadow-full">
              <Row>
                <Col md={6}>
                  <Row>
                    <Col sm={6} md={5}>
                      <div className="about-img">
                        <img
                          src={aboutImage}
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>
                          <span>Mario Rossi</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>
                          <span>full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          <span>contact@example.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>
                          <span>518-331-1142</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span>85%</span>
                    <ProgressBar now={85} />
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <ProgressBar now={75} />
                    <span>PHP</span> <span className="pull-right">65%</span>
                    <ProgressBar now={75} />
                    <span>JAVASCRIPT</span>
                    <span className="pull-right">85%</span>
                    <ProgressBar now={90} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left fs-1">About me</h5>
                    </div>
                    <p className="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at sem. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt.
                    </p>

                    <p className="lead">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus incidunt, est temporibus ex nihil ut quae ad
                      recusandae consequatur natus?
                    </p>

                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quisquam atque pariatur optio quibusdam recusandae
                      eveniet magnam ducimus ipsum. Cumque et libero quidem
                      maxime eligendi accusamus ipsa sed id nam velit?
                      Recusandae aut cumque, voluptatem, nisi sapiente minus
                      illum, optio laudantium nam alias amet est animi deleniti
                      sed expedita provident.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
