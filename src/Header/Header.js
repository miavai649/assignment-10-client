import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const [dark, setDark] = useState(false);
  const handleToggle = () => {
    setDark(!dark);
  };

  const {logOut, user} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(e => console.error(e))
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
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
                className=" ms-lg-5 w-25"
                variant="outline-dark"
              >
                <FaMoon></FaMoon> Dark
              </Button>
            ) : (
              <Button
                onClick={handleToggle}
                className="ms-lg-5 w-25 my-md-2 my-lg-0"
                variant="outline-dark"
              >
                <FaSun></FaSun> Light
              </Button>
            )}
          </Nav>
          <Nav>
            <Nav.Link>
              {
                user?.uid ?
                  <>
                  <Image style={{ height: "45px" }} className='me-3' roundedCircle src={user?.photoURL}></Image> 
                 <Button onClick={handleSignOut} variant="danger">Sign out</Button>
                  </>
                  :
                  <Button variant="info"><NavLink to='/signin'>Sign in</NavLink></Button> 
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
