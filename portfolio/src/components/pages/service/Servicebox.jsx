// ServiceBox.js
import React from "react";
import { Col } from "react-bootstrap";
import '../service/service.css'

const ServiceBox = ({ icon, title, description }) => {
  return (
    <Col md={4}>
      <div className="service-box">
        <div className="mb-4">
          <span className="ico-circle">
            {icon} {/* Here, the icon is passed as a prop */}
          </span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{title}</h2>
          <p className="s-description text-center">{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ServiceBox;
