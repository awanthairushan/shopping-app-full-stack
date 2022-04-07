import React,{useState} from 'react';
import Logobar from '../navbars/LogoBar';
import PromotionSection from './../promotionSection/PromotionSection'
import Footer from './../footer/Footer'
import {Row, Col} from 'react-bootstrap';


const Home: React.FC = () => {

    const [isProductSectionVisible, setIsProductSectionVisible] = useState<Boolean>(false);

    const setProductSectionVisible = (isProductSectionVisible: Boolean) => {
        setIsProductSectionVisible(isProductSectionVisible);
        console.log(isProductSectionVisible);
    }

    return (
        <Row>
            <Col xs={12}>
                <Logobar/>
            </Col>
            <Col xs={12} className="px-0">
                <PromotionSection setProductSectionVisible={setProductSectionVisible}/>
            </Col>
            <Col xs={12}>
                <Footer/>
            </Col>
        </Row>
    )
}

export default Home;