import React, {useState} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Row, Col} from 'react-bootstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryDateList from "../../Types/CategoryDateList";

const Home: React.FC = () => {

    const [isProductSectionVisible, setIsProductSectionVisible] = useState<Boolean>(false);

    const setProductSectionVisible = (isProductSectionVisible: Boolean) => {
        setIsProductSectionVisible(isProductSectionVisible);
        console.log(isProductSectionVisible);
    }

    const [category] = useState(CategoryDateList);
    return (
        <Row>
            <Col xs={12} className="px-0">
                <PromotionSection setProductSectionVisible={setProductSectionVisible}/>
                <CategoryList items={category}/>
            </Col>
        </Row>
    )
}

export default Home;
