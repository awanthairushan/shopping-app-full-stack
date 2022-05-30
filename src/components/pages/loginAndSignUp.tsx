import React from "react";
import Link from "react-router-dom"
import {Col, Row} from "react-bootstrap";

const LoginAndSignUp = () => {
    return (
        <Row className='login-and-signup'>
            <Col md={6} className='login'>login goes here</Col>
            <Col md={6} className='signup'>signup goes here</Col>
        </Row>
    )
}

export default LoginAndSignUp;