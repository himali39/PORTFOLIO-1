import React from "react";
import "./service.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsBarChart,
  BsBriefcase,
  BsCalendar2Week,
  BsCardList,
  BsCassette,
  BsDiagram3Fill,
} from "react-icons/bs";
import ServiceBox from "./Servicebox";


const Service = () => {
  return (
    <div id="services" className="services-mf pt-5 route">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="w-40 h-5 bg-blue-500 mx-auto" />
            </div>
          </Col>
        </Row>
        <Row>
          <ServiceBox
            icon={<BsDiagram3Fill />}
            title="Web Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
          <ServiceBox
            icon={<BsBriefcase />}
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
          <ServiceBox
            icon={<BsCalendar2Week />}
            title="Freelancing"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
          <ServiceBox
            icon={<BsCardList />}
            title="Responsive Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
          <ServiceBox
            icon={<BsCalendar2Week />}
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
          <ServiceBox
            icon={<BsCassette />}
            title="Marketing Services"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
          />
        </Row>
      </Container>
    </div>
  );
};

export default Service;
