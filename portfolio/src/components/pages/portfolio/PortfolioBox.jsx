import React from "react";
import { Col, Row } from "react-bootstrap";
import "../portfolio/portfolio.css";

const PortfolioBox = ({ img, title, category, date }) => {
  return (
    <Col md={4}>
      <div className="work-box">
        <div className="work-img">
          {<img src={img} alt="" className="img-fluid" />}
        </div>

        <div className="work-content">
          <Row>
            <Col sm={8}>
              <h2 className="w-title">{title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{category}</span> /
                <span className="w-date">{date}</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioBox;
