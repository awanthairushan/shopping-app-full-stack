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
        if (isCartVisible) {
            setIsCartVisible(false)
        } else {
            setIsCartVisible(true);
        }
    }

    return (
        <Row className="logo-bar">
            <Col lg={9} sm={8} xs={10} className="ps-3 ps-sm-4">
                <Image src={Logo} className="img-fluid ms-md-5 ms-sm-4"/>
            </Col>
            <Col lg={1} sm={1} xs={2} onClick={cartVisible}
                 className='ms-xl-3 ms-lg-0 shopping-cart-and-basket ps-md-0 ps-sm-1 ps-0'>
                <ShoppingCart className="shopping-cart mt-lg-0 me-0"/>
                <span className="d-flex align-items-center justify-content-center cart-basket">
                    {cartItems.length}
                </span>
            </Col>
            <Col lg={1} sm={2}
                 className='ps-md-0 ps-sm-0 ps-0 d-sm-block d-none'>
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
