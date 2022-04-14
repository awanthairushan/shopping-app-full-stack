import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, Row, Table} from "react-bootstrap";
import CheckOutTableItem from "../CheckOut/CheckOutTableItem";
import {ICart} from "../../Types/ShoppingTypes";

type CheckoutProps = {
    cartItems: ICart[];
    setCartItems: (items: ICart[]) => void;
}
const CheckOut: FC<CheckoutProps> = (props) => {
    const {cartItems, setCartItems} = props;
    const [discountCode, setDiscountCode] = useState<string>('')
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [colSpan1, setColSpan1] = useState<number>(3);
    const [colSpan2, setColSpan2] = useState<number>(4);

    const handleOnItemRemoved = (index: number) => {
        cartItems.splice(index, 1);
        setCartItems([...cartItems]);
    }

    const renderCartItems = () => {
        return cartItems.map((item, index) => {
            return <CheckOutTableItem cartItem={item} onRemoveItem={handleOnItemRemoved} index={index}/>;
        })
    }

    //discount code submit handler
    const handleOnDiscountCodeSubmit = (e: any) => {
        e.preventDefault();
        console.log(discountCode)
    }

    //Discount code change handler
    const handleOnDiscountCodeChange = (e: any) => {
        setDiscountCode(e.target.value);
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const handleResize = () => {
        const width = window.innerWidth;
        if (width > 832) {
            setColSpan1(3);
            setColSpan2(4);
        } else if (width <= 832 && width > 426) {
            setColSpan1(2);
            setColSpan2(5);
        } else if (width <= 426) {
            setColSpan1(0);
            setColSpan2(7);
        }
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
                    <tr className="px-0">
                        {colSpan1 !== 0 && <td colSpan={colSpan1}/>}
                        <td colSpan={colSpan2}>
                            <Form className="d-flex justify-content-start align-items-center"
                                  onSubmit={handleOnDiscountCodeSubmit}>
                                <span className="fs-5 me-3 discount-code-text">Have a discount code? </span>
                                <FormControl type="text" className="discount-input me-3" value={discountCode}
                                             onChange={handleOnDiscountCodeChange}/>
                                <Button className="apply-discount px-4" type="submit">APPLY</Button>
                            </Form>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default CheckOut;
