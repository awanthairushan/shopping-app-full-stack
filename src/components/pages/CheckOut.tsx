import React, {FC} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import CheckOutTableItem from "../CheckOut/CheckOutTableItem";
import {ICart} from "../../Types/ShoppingTypes";
import {map} from "react-bootstrap/ElementChildren";

type CheckoutProps = {
    cartItems: ICart[];
    setCartItems: (items: ICart[]) => void;
}
const CheckOut: FC<CheckoutProps> = (props) => {
    const {cartItems , setCartItems} = props;

    const handleOnItemRemoved = (index: number) => {
        cartItems.splice(index, 1);
        setCartItems([...cartItems]);
    }

    const renderCartItems = () => {
        return cartItems.map((item, index) => {
            return <CheckOutTableItem cartItem={item} onRemoveItem={handleOnItemRemoved} index={index}/>;
        })
    }
    return (
        <Row className="ms-lg-5 mx-md-4 mx-3 px-lg-3 px-md-2 pt-3 my-5 ">
            <h2 className="ps-0 page-title">Checkout</h2>
            <Col className="checkout p-3">
                <h5 className="fw-bold ps-2">Shopping Cart</h5>
                <Table className='checkout-table' responsive={true}>
                    <thead>
                    <tr className="test">
                        <th>#</th>
                        <th/>
                        <th className="">Item</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {renderCartItems()}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default CheckOut;
