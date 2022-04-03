import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import PromotionImage from './../../assets/images/PromotionImage.jpg';

const PromotionSection = () => {
    return (
        <Row className="mx-0">
            <Col className="px-0">
                <Image src={PromotionImage} className="img-fluid"/>
            </Col>
        </Row>
    );
}

export default PromotionSection;