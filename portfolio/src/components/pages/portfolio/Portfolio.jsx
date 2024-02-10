import React from "react";
import portImg1 from "../../../img/img-1.jpg";
import portImg2 from "../../../img/img-2.jpg";
import portImg3 from "../../../img/img.webp";
import portImg4 from "../../../img/img-4.jpg";
import portImg5 from "../../../img/img-5.jpg";
import portImg6 from "../../../img/img-6.jpg";
import PortfolioBox from "./PortfolioBox";
import { Col, Container, Row } from "react-bootstrap";
import "../portfolio/portfolio.css";

const Portfolio = () => {
  return (
    <div id="work" className="portfolio-mf sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </Col>
        </Row>
        <Row>
          <PortfolioBox
            img={portImg1}
            title="Loreda Cuno Nere"
            category="Web Design"
            date="03 Sep. 2021"
          />
          <PortfolioBox
            img={portImg2}
            title="Nobis et tempore"
            category="Graphic Design"
            date="08 Aug. 2022"
          />
          <PortfolioBox
            img={portImg3}
            title="Curabitu arcu erat"
            category="Web Developer"
            date="19 Jan. 2024"
          />
          <PortfolioBox
            img={portImg4}
            title="porttitor at sem"
            category="Web Developer"
            date="08 Jun. 2024"
          />
          <PortfolioBox
            img={portImg5}
            title="Studio Lena Mado"
            category="Web Developer"
            date="13 Jun. 2024"
          />
          <PortfolioBox
            img={portImg6}
            title="Curabitu arcu erat"
            category="Web Developer"
            date="13 sep. 2020"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
