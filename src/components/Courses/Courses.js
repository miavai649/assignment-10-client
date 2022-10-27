import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div class="row container mx-auto">
        <div class="col-8" style={{ marginTop: "80px" }}>
          <Row  sm={1} md={2}  className="g-4">
          {
            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
          }
          </Row>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
};

export default Courses;
