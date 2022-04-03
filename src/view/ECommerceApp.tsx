import React from 'react';
import Home from '../components/pages/Home';
import {Row, Col} from 'react-bootstrap';

const ECommerceApp: React.FC = () => {
    return (
        <Row>
            <Col>
                <Home/>
            </Col>
        </Row>
    )
}

export default ECommerceApp;