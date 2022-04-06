import React from 'react';
import {Col, Row} from "react-bootstrap";
import {PhoneCall, Truck} from "react-feather";

const ContactBar: React.FC = () => {
  return (
    <Row>
      <Col xs={12} md={6} className="offset-md-6 offset-sm-0 contact-bar">
        <Row>
          <Col xs={12} md={3} className="offset-md-3 offset-sm-0 p-0 contact-details">
            <Truck className="me-1 text-end offset-md-2"/>
            <span className="pe-3 mt-2 text-end ">Delivery Areas</span>
          </Col>
          <Col xs={12} md={3} className="contact-details">
            <PhoneCall className="m-1 offset-md-3 offset-sm-0 p-0" />
            <span className="pe-3">+94 112 123456</span>
          </Col>
          <Col xs={12} md={3} className="m-0 p-0 ">
            <Row>
              <Col xs={6} className="label-color">
                <span className="pe-3 contact-details ">Register</span>
              </Col>
              <Col xs={6} className="label-color">
                <span className="contact-details">Login</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ContactBar;
