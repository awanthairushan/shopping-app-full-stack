import React from 'react';
import {Container, Row} from 'react-bootstrap';
import LogoBar from "../components/navbars/LogoBar";
import {Outlet} from "react-router-dom";
import NavBar from "../components/navbars/NavBar";

const ECommerceApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <LogoBar/>
                <NavBar/>

            </Row>
            <Outlet/>

        </Container>
    )
}

export default ECommerceApp;
