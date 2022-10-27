import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, image, rating, id, price } = course;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" style={{ height: "180px" }} src={image} />
        <Card.Body>
          <div className="d-flex justify-content-between align-content-center">
            <Card.Title>{title}</Card.Title>
            <span className="fs-5">${price}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <Button variant="info">
              <Link to={`/course/${id}`}>See Detail</Link>
            </Button>
            <div>
              <span className="fw-semibold">
                <FaStar className="text-warning"></FaStar> {rating}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseCard;
