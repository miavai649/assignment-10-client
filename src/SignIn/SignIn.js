import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignIn = () => {
  const { signInWithGoogle, signInWithGithub, signIn } = useContext(AuthContext)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user
        setError("")
        console.log(user)
        toast.success('Logged in successfully')
      })
      .catch(e => {
      console.error(e)
        setError(e.message)
    })
  }

  const handleGithubSignIn = () => {
    signInWithGithub(githubProvider)
      .then(result => {
        const user = result.user
        setError("")
        console.log(user)
        toast.success('Logged in successfully')
      })
      .catch(e => {
        console.error(e)
        setError(e.message)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        setError("")
        form.reset()
        toast.success('Logged in successfully')
        navigate(from, { replace: true })
      })
      .catch(e => {
        console.error(e)
        setError(e.message)
    })
  }

  return (
    <div className="container mt-5">
        <h2 className="text-center mb-3">Sign in</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto bg-info bg-opacity-10 p-5 rounded-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className="w-100 mt-1" variant="primary" type="submit">
          Sign in
        </Button>
        <span className="text-danger">{error}</span>
        <div className="text-center my-5">
            <FaGithub onClick={handleGithubSignIn} className="me-2 fs-1"></FaGithub>
            <FaGoogle onClick={handleGoogleSignIn} className="ms-2 fs-1"></FaGoogle>
        </div>
        <p className="text-center">Don't have an account? <Link to='/signup'>Sign up</Link></p>
      </Form>
    </div>
  );
};

export default SignIn;
