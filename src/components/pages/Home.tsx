import React, {useState} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Row, Col} from 'react-bootstrap';
import ProductSection from './ProductSection';


const Home: React.FC = () => {

    const [isProductSectionVisible, setIsProductSectionVisible] = useState<Boolean>(false);

    const setProductSectionVisible = (isProductSectionVisible: Boolean) => {
        setIsProductSectionVisible(isProductSectionVisible);
        console.log(isProductSectionVisible);
    }

    return (
        <Row>
            <Col xs={12} className="px-0">
                <PromotionSection setProductSectionVisible={setProductSectionVisible}/>
                <ProductSection/>
            </Col>
            <Col xs={12}>
                <Footer/>
            </Col>
        </Row>
    )
}

export default Home;
