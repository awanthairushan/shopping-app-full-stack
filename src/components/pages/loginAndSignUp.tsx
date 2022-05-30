import React from "react";
import Link from "react-router-dom"
import {Col, Row} from "react-bootstrap";
import SignUp from "../signup/SignUp";

const LoginAndSignUp = () => {
    return (
        <Row className='login-and-signup'>
            <Col md={6} className='login'>login goes here</Col>
            <Col md={6} className='signup'><SignUp/></Col>
        </Row>
    )
}

export default LoginAndSignUp;
