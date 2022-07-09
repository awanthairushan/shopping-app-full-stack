import React, {useState} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Row, Col} from 'react-bootstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryDateList from "../../Types/CategoryDateList";
import ProductSection from '../products/ProductSection';
import {ICart} from '../../Types/ShoppingTypes';
import SearchBar from './SearchBar';

type HomeProps = {
    onCartItemCreate: (newItem: ICart) => void;
};
const Home: React.FC<HomeProps> = (props) => {
    const {onCartItemCreate} = props;
    const [isProductSectionVisible, setIsProductSectionVisible] = useState<Boolean>(false);

    const setProductSectionVisible = (isProductSectionVisible: Boolean) => {
        setIsProductSectionVisible(isProductSectionVisible);
        console.log(isProductSectionVisible);
    }

    const [category] = useState(CategoryDateList);
    return (
        <Row className=''>
            <Col xs={12} className="">
                <PromotionSection setProductSectionVisible={setProductSectionVisible}/>
                <SearchBar/>
                <Row className='mx-lg-5'>
                    <Col className='mx-lg-4'>
                        <CategoryList items={category} onCartItemCreate={onCartItemCreate}/>
                    </Col>
                </Row>
                {/* <ProductSection onCartItemCreate={onCartItemCreate}/> */}
            </Col>
        </Row>
    )
}

export default Home;
