import React from "react";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  return (
    <div>
      <div class="row container mx-auto">
        <div class="col-8" style={{marginTop: '80px'}}>
            <CourseCard></CourseCard>
        </div>
        <div class="col-4">col-4</div>
      </div>
    </div>
  );
};

export default Courses;
