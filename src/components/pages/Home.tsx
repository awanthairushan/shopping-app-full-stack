import React from 'react';
import Logobar from '../navbars/LogoBar';
import PromotionSection from './../promotionSection/PromotionSection'
import {Row, Col} from 'react-bootstrap';


const Home: React.FC = () => {
    return (
        <Row>
            <Col xs={12}>
                <Logobar/>
            </Col>
            <Col xs={12} className="px-0">
                <PromotionSection/>
            </Col>
        </Row>
    )
}

export default Home;