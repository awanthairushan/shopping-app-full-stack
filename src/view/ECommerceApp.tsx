import {Container, Row, Col} from 'react-bootstrap';
import NavBar from "../components/navbars/NavBar";
import Footer from './../components/footer/Footer'
import React from 'react';
import LogoBar from "../components/navbars/LogoBar";
import {Outlet} from "react-router-dom";
import ContactBar from '../components/navbars/ContactBar';
import {ICart} from '../Types/ShoppingTypes';

type ECommerceAppProps = {
    cartItems: ICart[],
}
const ECommerceApp: React.FC<ECommerceAppProps> = (props) => {
    const {cartItems} = props;
    return (
        <Container fluid className='p-0 m-0'>
            <Row className="mx-0">
                <ContactBar/>
                <LogoBar cartItems={cartItems}/>
                <NavBar/>
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

export  default ECommerceApp;
