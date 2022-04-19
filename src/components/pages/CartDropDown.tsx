import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import 'react-dropdown/style.css';
import { ICart } from '../../Types/ShoppingTypes';
import CartDropDownItem from './CartDropDownItem';
import cartempty from './../../assets/images/cart-empty.jpg';
import {Triangle} from "react-feather";

type CartDropDownProp = {
    cartItems: ICart[],
}
const CartDropDown: React.FC<CartDropDownProp> = (props) => {
    const { cartItems } = props;

    const subTotalSet = () => {
        var subtotal = 0;
        for (var i = 0; i < cartItems.length; i++) {
            var num = parseInt(cartItems[i].price) + subtotal
            subtotal = num;
        }
        return subtotal;
    }
    const discountSet = () => {
        var discount = 30;
        return discount;
    }
    const totalSet = () => {
        var subTotal = subTotalSet();
        var discount = discountSet();
        var total = subTotal - discount;
        return total;
    }

    const totalItemSet = () => {
        var quentityTotal = 0;
        for (var i = 0; i < cartItems.length; i++) {
            var num = cartItems[i].quentity + quentityTotal
            quentityTotal = num;
        }
        return quentityTotal;
    }
    if (cartItems.length === 0) {
        return (
            <Row className='cart-priview-header'>
                <Col xs={12}>
                <Image src={cartempty} className="cart-empty"/>
                </Col>
            </Row>
        );
    }
    const renderCartItems = () => {
        return (
            <>
                {cartItems.map((item: ICart, index: number) => (
                    <CartDropDownItem
                        item={item}
                        index={index}
                        key={index}
                    />
                ))}
            </>
        );
    };

    return (
        <Row className='cart-priview-header'>
            <Col xs={12}>
                {/* <Triangle className='triangle'/> */}
                {renderCartItems()}
                <Row>
                    <Col xs={7}>
                        <Row>
                            <h5>Subtotal ({totalItemSet()} items)</h5>
                        </Row>
                        <Row>
                            <h5>Discount</h5>
                        </Row>
                    </Col>
                    <Col xs={5} className="cart-values">
                        <h5 className='cart-subtotal'>Rs. {subTotalSet()}.00</h5>
                        <h5>Rs. {discountSet()}.00</h5>
                    </Col>
                    <hr />
                </Row>

                <Row>
                    <Col xs={6}>
                        <h5>Total</h5>
                    </Col>
                    <Col xs={6} className="cart-values">
                        <h5 className='cart-total'>Rs. {totalSet()}.00</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default CartDropDown;
