import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegFilePdf } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const course = useLoaderData();
  const { image, title, details, description, instructor } = course;
  return (
    <div className="container mt-5">
      <Card>
        <Card.Img variant="top" src={image} style={{ height: "350px" }} />
        <Card.Body>
          <div className="d-flex justify-content-between">
          <Card.Title className="fs-1">{title}</Card.Title>
          <Button variant="outline-success"><FaRegFilePdf></FaRegFilePdf> PDF Download</Button>
          </div>
          <Card.Text className="text-muted">{description}</Card.Text>
                      <h4 className="mt-4">Instructor</h4>
                  <Card body className="mb-4">
                      <div>
                          <img style={{height: '150px'}} src={instructor.img} alt="" />
                      </div>
                      <div className="mt-3">
                          <h5>{instructor.name}</h5>
                          <p>{instructor.qualification}</p>
                      </div>
                  </Card>
                  <h4>About the course:</h4>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary">Get premium</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
