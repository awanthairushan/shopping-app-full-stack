import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import LogoBar from "../components/navbars/LogoBar";
import {Outlet} from "react-router-dom";
import NavBar from "../components/navbars/NavBar";
import Footer from './../components/footer/Footer'

const ECommerceApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <LogoBar/>
                    <NavBar/>
                </Col>
            </Row>
            <Outlet/>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>

        </Container>
    )
}

export default ECommerceApp;
