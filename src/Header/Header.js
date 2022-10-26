import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../assets/logo/logo.png";

const Header = () => {
  const [dark, setDark] = useState(false);
  const handleToggle = () => {
    setDark(!dark);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={Image}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />{" "}
          Knowledge Media
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            {dark ? (
              <Button
                onClick={handleToggle}
                className="ms-5"
                variant="outline-dark"
              >
                <FaMoon></FaMoon> Dark
              </Button>
            ) : (
              <Button
                onClick={handleToggle}
                className="ms-5"
                variant="outline-dark"
              >
                <FaSun></FaSun> Light
              </Button>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
