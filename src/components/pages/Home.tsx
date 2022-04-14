import React, {useState} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Row, Col} from 'react-bootstrap';
import ProductSection from './ProductSection';
import { ICart } from '../../Types/ShoppingTypes';
import SearchBar from './../pages/SearchBar'

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

    return (
        <Row className=''>
            <Col xs={12} className="">
                <PromotionSection setProductSectionVisible={setProductSectionVisible}/>
                <SearchBar/>
                <ProductSection onCartItemCreate={onCartItemCreate}/>
            </Col>
        </Row>
    )
}

export default Home;
