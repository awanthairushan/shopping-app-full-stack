import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import Logo from '../../assets/images/LOGO.png';
import {ShoppingCart} from 'react-feather';

const LogoBar: React.FC = () => {
    return (
        <Row className="logobar">
            <Col xl={9} lg={8} sm={7} xs={6} className="ps-4">
                <Image src={Logo} className="img-fluid ms-md-5"/>
            </Col>
            <Col xl={3} lg={4} sm={5} xs={6}>
                <ShoppingCart className="shopping-cart mt-md-2 me-2"/>
                <button type="button" className=" py-0 btn text-light ms-md-4 ">Check out</button>
            </Col>
        </Row>
    )
}

export default LogoBar;