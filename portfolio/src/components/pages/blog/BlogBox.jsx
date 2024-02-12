import React from "react";
import "./blog.css";
import { Card, Col, Row } from "react-bootstrap";
import { BsClock } from "react-icons/bs";

const BlogBox = ({ img, category, title, des, footerImg, min }) => {
  return (
    <Col md={4}>
      <div className="card card-blog">
        <div className="card-img">
          <a href="">{<img src={img} alt className="img-fluid" />}</a>
        </div>
        <Card.Body className="card-body">
          <div className="card-category-box">
            <div className="card-category">
              <h6 className="category">{category}</h6>
            </div>
          </div>
          <Card.Link className="fs-5 mt-2 text-decoration-none" href="#">
            {title}
          </Card.Link>
          <Card.Text className="card-description">{des}</Card.Text>
        </Card.Body>

        <footer className="card-footer">
          <div className="post-author">
            <Card.Link href="#banner" className="text-decoration-none">
              {<img src={footerImg} alt className="rounded-circle" />}
              <span className="author">Mario Rossi</span>
            </Card.Link>
          </div>
          <div className="post-date">
            <BsClock />
            <span className="ms-1">{min}</span>
          </div>
        </footer>
      </div>
    </Col>
  );
};

export default BlogBox;
