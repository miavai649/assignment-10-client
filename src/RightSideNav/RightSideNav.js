import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const RightSideNav = ({ course }) => {
  const { title, id } = course;
  return (
    <div>
      <ListGroup>
        <ListGroup.Item className="text-center mt-3" variant="secondary"><Link to={`/course/${id}`}>{title}</Link></ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSideNav;
