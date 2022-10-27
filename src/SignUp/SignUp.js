import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
        .then(result => {
        const user = result.user
        console.log(user)
        setError("")
        form.reset()
        handleUpdateUserProfile(name, photoURL)
        })
        .catch(e => {
            console.error(e)
            setError(e.message)
      })
    };
    
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        updateUserProfile(profile);
      };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Sign up</h2>
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto bg-info bg-opacity-10 p-5 rounded-3"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button className="w-100 mt-1" variant="primary" type="submit">
          Sign up
        </Button>
        <span className="text-danger">{error}</span>
        <p className="text-center mt-5">
          You have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
