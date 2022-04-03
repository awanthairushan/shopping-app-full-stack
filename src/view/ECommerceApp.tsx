import React from 'react';
import Home from '../components/pages/Home';
import {Container, Row, Col} from 'react-bootstrap';

const ECommerceApp: React.FC = () => {
    return (
            <Row xs={12}>
                <Home/>
            </Row>
    )
}

export default ECommerceApp;