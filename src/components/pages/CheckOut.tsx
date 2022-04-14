import React, {FC} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import CheckOutTableItem from "../CheckOut/CheckOutTableItem";

const CheckOut: FC = () => {
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
                    <CheckOutTableItem/>
                    <CheckOutTableItem/>
                    <CheckOutTableItem/>
                    <CheckOutTableItem/>
                    <CheckOutTableItem/>
                    <CheckOutTableItem/>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default CheckOut;
