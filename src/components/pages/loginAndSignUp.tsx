import React from "react";
import Link from "react-router-dom"
import {Col, Row} from "react-bootstrap";
import LoginPage from "../login/LoginPage";

const LoginAndSignUp = () => {
    return (
        <Row className='login-and-signup'>
            <Col md={6} className='login'>
              <LoginPage />
            </Col>
            <Col md={6} className='signup'>signup goes here</Col>
        </Row>
    )
}

export default LoginAndSignUp;