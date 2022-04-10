import React from 'react';
import {Nav} from "react-bootstrap";
import {PhoneCall, Truck} from "react-feather";

const ContactBar: React.FC = () => {
  return (
    <Nav className="justify-content-md-end justify-content-center contact-bar ">
      <Nav.Item className="text-muted label">
        <Truck />
        <span className="ms-2">Delivery Areas</span>
      </Nav.Item>
      <Nav.Item className="label ms-4">
        <PhoneCall />
        <span className="ms-2">+94 112 123456</span>
      </Nav.Item>
      <Nav.Item className="buttons ms-4">
        <span className="ms-2" >Register</span>
      </Nav.Item>
      <Nav.Item className="label ps-4">
        <span>Login</span>
      </Nav.Item>
    </Nav>
  );
}

export default ContactBar;
