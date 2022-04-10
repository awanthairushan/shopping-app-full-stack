import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { ICart } from '../../Types/ShoppingTypes';
import { carrot, coconut } from "../../assets/images/images";

type CartDropDownItemProps = {
    item: ICart,
    index: number,
}
const CartDropDownItem: React.FC<CartDropDownItemProps> = (props) => {
    const { item } = props;
    var imglink;

    if (item.img == "carrot") {
        imglink = carrot;
    } else if (item.img == "coconut") {
        imglink = coconut;
    }
    return (
        <Row>
            <Col xs={4} className="cart-d-img p-0">
                <Image src={imglink} alt="item img" />
            </Col>
            <Col xs={4} className="cart-d-details p-0">
                <Row className='cart-d-name'>
                    <h5>{item.name}</h5>
                </Row>
                <Row className='cart-d-quentity'>
                    <h5>Qty: {item.quentity}</h5>
                </Row>
            </Col>
            <Col xs={4} className="cart-d-price p-0">
                <h5>Rs.{item.price}</h5>
            </Col>
            <hr />
        </Row>
    )
}

export default CartDropDownItem;