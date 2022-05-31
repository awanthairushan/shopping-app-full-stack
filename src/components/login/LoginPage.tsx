import {Button, Card, Form} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {Truck} from "react-feather";

const LoginPage = () => {
  return (
    <Form>
      <Form.Group className="md-12 text-center" controlId="formBasicPassword">
        <h3>Sign in to Shopping Cart</h3>
      </Form.Group>
      <Form.Group className="xs-12 md-9 px-5 mx-5" controlId="formUserName">

        <Form.Control type="text" placeholder="Enter User Name"  ></Form.Control>
      </Form.Group>
      <Form.Group className="md-12 md-9 px-5 mx-5 pt-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="xs-12 md-9  signin-btn" type="submit" >
        Sign in
      </Button>
      <Form.Group className="xs-12 md-9 px-5 mx-5 fogotton-pass-label text-center" controlId="fogottonPassword">
        <span><Link to={"../ForgotPassWord"}>Forgot your password? </Link></span>
      </Form.Group>
    </Form>
  )
}

export  default LoginPage;