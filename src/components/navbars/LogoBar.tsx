import React, {useState} from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Logo from '../../assets/images/LOGO.png';
import { ShoppingCart } from 'react-feather';
import CartDropDown from '../pages/CartDropDown';
import { ICart } from '../../Types/ShoppingTypes';

type LogoBarProp = {
    cartItems: ICart[],
}
const LogoBar: React.FC<LogoBarProp> = (props) => {
    const {cartItems} = props;
    const [isCartVisible, setIsCartVisible] = useState(false);

    const cartVisible = () => {
        if(isCartVisible === true){
            setIsCartVisible(false)
        } else {
            setIsCartVisible(true);
        }
    }

    return (
        <Row className="logobar">
            <Col xl={9} lg={8} sm={7} xs={6} className="ps-4 ">
                <Image src={Logo} className="img-fluid ms-md-5" />
            </Col>
            <Col xl={1} lg={1} sm={1} xs={1} onClick={cartVisible}>
                <ShoppingCart className="shopping-cart mt-md-2 me-2" />
                <span className="d-flex align-items-center justify-content-center cart-basket">
                    {cartItems.length}
                </span>
            </Col>
            <Col xl={2} lg={3} sm={4} xs={5}>
                <button type="button" className=" py-0 btn text-light">Check out</button>
            </Col>
            <Col xs={12} className='cart-priview'>
                {isCartVisible &&<CartDropDown cartItems={cartItems}/>}
            </Col>
        </Row>
    )
}

export default LogoBar;