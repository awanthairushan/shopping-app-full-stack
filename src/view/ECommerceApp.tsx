import React, {useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import LogoBar from "../components/navbars/LogoBar";
import {Outlet} from "react-router-dom";
import NavBar from "../components/navbars/NavBar";
import ContactBar from '../components/navbars/ContactBar';
import { ICart } from '../components/types/ShoppingTypes';

type ECommerceAppProps = {
    cartItems: ICart[],
}
const ECommerceApp: React.FC<ECommerceAppProps> = (props) => {
    const {cartItems} = props;
    return (
        <Container fluid={true}>
            <Row>
                <ContactBar/>
                <LogoBar cartItems={cartItems}/>
                <NavBar/>
            </Row>
            <Outlet/>

        </Container>
    )
}

export default ECommerceApp;
