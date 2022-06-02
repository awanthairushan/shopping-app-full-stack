import React from "react";
import {Col, Row} from "react-bootstrap";
import LoginPage from "../login/LoginPage";
import SignUp from "../signup/SignUp";

const LoginAndSignUp = () => {
    return (
        <Row className='login-and-signup'>
            <Col md={6} className='login py-5'>
              <LoginPage />
            </Col>
            <Col md={6} className='signup py-2'>
              <SignUp/>
            </Col>
        </Row>
    )
}

export default LoginAndSignUp;
