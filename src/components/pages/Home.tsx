import React, {useRef, useState} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Col, Row} from 'react-bootstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryDateList from "../../Types/CategoryDateList";
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
    }

    const [categories] = useState(CategoryDateList);
    const myRef = useRef(null);

    // @ts-ignore
    const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

    const handleOnCategoryChange = (category: string) => {
        console.log(category);
    }

    return (
        <Row className=''>
            <Col xs={12} className="">
                <PromotionSection setProductSectionVisible={executeScroll}/>
                <SearchBar/>
                <div ref={myRef}>
                    <Row className='mx-lg-5'>
                        <Col className='mx-lg-4'>
                            <CategoryList items={categories} onCategoryChange={handleOnCategoryChange}/>
                        </Col>
                    </Row>
                    {/* <ProductSection onCartItemCreate={onCartItemCreate}/> */}
                </div>
            </Col>
        </Row>
    )
}

export default Home;
