import React, {useState} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import Logo from '../../assets/images/LOGO.png';
import {ShoppingCart} from 'react-feather';
import CartDropDown from '../pages/CartDropDown';
import {ICart} from '../../Types/ShoppingTypes';
import {Link} from "react-router-dom";

type LogoBarProp = {
    cartItems: ICart[],
}
const LogoBar: React.FC<LogoBarProp> = (props) => {
    const {cartItems} = props;
    const [isCartVisible, setIsCartVisible] = useState(false);

    const cartVisible = () => {
        if (isCartVisible === true) {
            setIsCartVisible(false)
        } else {
            setIsCartVisible(true);
        }
    }

    return (
        <Row className="logobar">
            <Col lg={9} sm={7} xs={6} className="ps-3">
                <Image src={Logo} className="img-fluid ms-md-5"/>
            </Col>
            <Col lg={1} sm={1} xs={2} onClick={cartVisible} className='ms-xl-3 ms-lg-0'>
                <ShoppingCart className="shopping-cart mt-lg-0 me-0 ms-5"/>
                <span className="d-flex align-items-center justify-content-center cart-basket">
                    {cartItems.length}
                </span>
            </Col>
            <Col lg={1} sm={4} xs={4}
                 className='d-flex justify-content-end justify-content-sm-start ps-xl-0 ps-sm-3 ps-0 '>
                <Link to='/checkout'>
                    <button type="button" className=" py-0 btn text-light">Checkout</button>
                </Link>
            </Col>
            <Col xs={12} className='cart-priview'>
                {isCartVisible && <CartDropDown cartItems={cartItems}/>}
            </Col>
        </Row>
    )
}

export default LogoBar;
