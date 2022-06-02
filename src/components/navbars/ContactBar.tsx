import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {PhoneCall, Truck} from "react-feather";
import {Link} from "react-router-dom";

const ContactBar: React.FC = () => {
  return (
    <Row>
      <Col xs={12} className="ms-sm-0 ps-sm-0 ps-3 me-xl-4">
        <Navbar bg="light" expand="lg" className="contact-bar float-end">
          <Container>
            <Navbar.Brand href="#home">
              <span className="mx-2">
            <a href="tel:+94 112 123456" className="href ms-0">
              <PhoneCall/> +94 112 123456</a>
          </span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item className="text-muted label ps-2 ">
                  <Truck/>
                  <span className="ms-2">Delivery Areas</span>
                </Nav.Item>
                <Nav.Item className="register-button ms-2 d-flex float-end">
                  <span className="px-2 mx-2">Register</span>
                </Nav.Item>
                <Nav.Item className="button-login ps-2 ms-3 me-2 d-flex float-end">
                  <span><Link to={"LoginAndSignup"}>Login</Link></span>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

export default ContactBar;
