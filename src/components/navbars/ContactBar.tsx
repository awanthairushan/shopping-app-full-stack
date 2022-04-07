import React from 'react';
import {Col, Row} from "react-bootstrap";
import {PhoneCall, Truck} from "react-feather";

const ContactBar: React.FC = () => {
  return (
    <Row >
      <Col md={{span: 6, offset: 6}} className="contact-bar">
        <Row>
          <Col xs={12} md={3} className="offset-md-2 d-inline-flex align-self-end
            offset-sm-0 d-flex justify-content-center">
            <span className="label text-muted ">
              <Truck/>
              <span className="ps-2 ">Delivery Areas</span>
            </span>
          </Col>
          <Col xs={12} md={3} className="d-inline-flex align-items-end d-flex justify-content-center">
            <span className="label" >
              <PhoneCall/>
              <span className="ps-2 text-black">+94 112 123456</span>
            </span>
          </Col>
          <Col xs={12} md={2} className="d-inline-flex align-items-end pe-0 d-flex justify-content-center buttons">
            <label className="buttons">
              Login
            </label>
          </Col>
          <Col xs={12} md={2} className="d-inline-flex align-items-end ms-0 d-flex justify-content-center buttons">
            <label>
              Register
            </label>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ContactBar;
