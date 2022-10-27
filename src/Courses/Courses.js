import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import RightSideNav from "../RightSideNav/RightSideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="row container mx-auto">
        <div className="col-8" style={{ marginTop: "80px" }}>
          <Row  sm={1} md={2}  className="g-4">
          {
            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
          }
          </Row>
        </div>
        <div className="col-4 bg-info bg-opacity-25">
          <h3 className="text-center mt-3">All Courses</h3>
          <hr />
          {
            courses.map(course => <RightSideNav key={course.id} course={course}></RightSideNav>)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;
