// ServiceBox.js
import React from "react";
import { Card, Col } from "react-bootstrap";
import "../service/service.css";

const ServiceBox = ({ icon, title, description }) => {
  return (
    <Col md={4}>
      <div className="service-box">
        <Card.Body>
          <div className="mb-4">
            <span className="ico-circle">{icon}</span>
          </div>
          <div className="service-content">
            <Card.Title className="s-title">{title}</Card.Title>
            <Card.Text className="s-description text-center">
              {description}
            </Card.Text>
          </div>
        </Card.Body>
      </div>
    </Col>
  );
};

export default ServiceBox;
