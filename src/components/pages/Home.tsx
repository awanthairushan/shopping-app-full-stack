import React, {useRef, useState, useEffect} from 'react';
import PromotionSection from '../Promotion/PromotionSection'
import {Row, Col, Button} from 'react-bootstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryDateList from "../../Types/CategoryDateList";
import ProductSection from '../products/ProductSection';
import {ICart} from '../../Types/ShoppingTypes';
import SearchBar from './SearchBar';
import {useNavigate} from "react-router-dom";

type HomeProps = {
    onCartItemCreate: (newItem: ICart) => void;
};
const Home: React.FC<HomeProps> = (props) => {

    const navigate = useNavigate();
    const {onCartItemCreate} = props;
    const [isProductSectionVisible, setIsProductSectionVisible] = useState<Boolean>(false);
    const user = localStorage.getItem('role');

    useEffect(() => {
        console.log(user)
        if(user ==null|| user == "nouser") {
            navigate('/loginpage');
        }
    }, []);

    const setProductSectionVisible = (isProductSectionVisible: Boolean) => {
        setIsProductSectionVisible(isProductSectionVisible);
        console.log(isProductSectionVisible);
    }

    const [category] = useState(CategoryDateList);
    const myRef = useRef(null);

    // @ts-ignore
    const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll


    return (
        <Row className=''>
            {console.log(user)}
            <Col xs={12} className="">
                    <PromotionSection setProductSectionVisible={executeScroll}/>
                    <SearchBar/>
                <div ref={myRef}>
                    <Row className='mx-lg-5'>
                        <Col className='mx-lg-4'>
                            <CategoryList items={category} onCartItemCreate={onCartItemCreate}/>
                        </Col>
                    </Row>
                    {/* <ProductSection onCartItemCreate={onCartItemCreate}/> */}
                </div>
            </Col>
        </Row>
    )
}

export default Home;
