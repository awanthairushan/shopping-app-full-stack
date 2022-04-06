import React from 'react';
import {Col, Row} from "react-bootstrap";
import {PhoneCall, Truck} from "react-feather";

const ContactBar: React.FC = () => {
  return (
    <Row>
      <Col xs={12} md={6} className="offset-6 contact-bar">
        <Row>
          <Col xs={12} md={3} className="offset-3 p-0 contact-details">
            <Truck className="me-1 text-end offset-2"/>
            <span className="pe-3 mt-2 text-end ">Delivery Areas</span>
          </Col>
          <Col xs={12} md={3} className="contact-details">
            <PhoneCall className="m-1 offset-3" />
            <span className="pe-3">+94 112 123456</span>
          </Col>
          <Col xs={12} md={3} className="m-0 p-0  label-color">
            <span className="pe-3">Register</span>
            <span>Login</span>
          </Col>
        </Row>
      </Col>
    </Row>

  );

}

export default ContactBar;
