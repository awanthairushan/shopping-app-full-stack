import React from 'react';
import Home from '../components/pages/Home';
import {Row, Col} from 'react-bootstrap';

const ECommerceApp: React.FC = () => {
    return (
        <Row className="mx-0">
            <Col>
                <Home/>
            </Col>
        </Row>
    )
}

export default ECommerceApp;