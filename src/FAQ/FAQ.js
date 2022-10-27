import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
      <div className="container">
          <h2 className="my-5 text-center">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Does Knowledge Media provide certificate?</Accordion.Header>
          <Accordion.Body className="bg-info bg-opacity-10">
          All participants will have the opportunity to receive certificates upon successful completion of the courses.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I get a 10 Minute School job?</Accordion.Header>
          <Accordion.Body>
          To get a job at 10 Minute School, browse currently open positions and apply for a job near you. Once you get a positive response, make sure to find out about the interview process at 10 Minute School and prepare for tough questions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is Knowledge Media a company?</Accordion.Header>
          <Accordion.Body>
            Knowledge Media is E-learning platform.Where you can learn Essential topics about all skill development such as spoken english, Web Design, Data Entry, Ms Office etc with an affortable price.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
