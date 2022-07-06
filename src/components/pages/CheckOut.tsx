import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, FormLabel, Image, Row, Table} from "react-bootstrap";
import CheckOutTableItem from "../CheckOut/CheckOutTableItem";
import {ICart} from "../../Types/ShoppingTypes";
import NumberFormat from "react-number-format";
import ShippingForm from "../CheckOut/ShippingForm";
import banner from '../../assets/images/banners/checkoutPageBanner.png';
import ChangeShippingAddressSection from "../CheckOut/ChangeShippingAddressSection";

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

    //Form submit button handler
    const handleOnFormSubmit = (e: any) => {

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
        <Row className="mx-lg-5 mx-md-4 mx-3 px-lg-5 px-md-2 pt-3 my-5 ">
            <h5 className="ps-0 page-title mx-lg-5">Checkout Page</h5>
            <Col md={12} className="checkout p-3 ">
                <h5 className="ps-2 table-title">Shopping Cart</h5>
                <Table className='checkout-table' responsive={true}>
                    <thead>
                    <tr>
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
                    <tr>
                        <td colSpan={5}>Delivery Charge</td>
                        <td colSpan={2}>
                            <NumberFormat className='checkout-number-format' prefix="Rs." value={400.99}
                                          decimalScale={2}
                                          fixedDecimalScale={true}
                            />
                        </td>
                    </tr>
                    <tr className="checkout-total">
                        <td colSpan={5}>Total</td>
                        <td colSpan={2} className=" ">
                            <NumberFormat className='checkout-number-format text-red fw-bold' prefix="Rs."
                                          value={400.99}
                                          decimalScale={2}
                                          fixedDecimalScale={true}
                            />
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>

            <Col lg={6} md={12} className="mt-3">
                <Image src={banner} fluid={true} className="border p-1"/>
            </Col>

            <Col lg={6} md={12} className="mt-3">
                <Row>
                    <Col md={12} className="border py-4">
                        <Row>
                            <Col lg={6} md={6} className='align-items-center d-inline-flex'>
                              <span>
                            Already have an account?
                        </span>
                            </Col>
                            <Col lg={6} md={6}>
                                <Button className="signing-button" type="submit">Sign in</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={12} className="border px-0 mt-1">
                        <p className="border-bottom py-3 px-2">
                            Shipping and Billing Address
                        </p>
                        <ShippingForm/>
                    </Col>
                    <Col md={12} className="px-0 mt-lg-4">
                        <ChangeShippingAddressSection/>
                    </Col>
                    <Col md={12} className='d-flex justify-content-center'>
                        <Button className="signing-button mt-3 py-1" type="submit"
                                onSubmit={handleOnFormSubmit}>Submit</Button>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default CheckOut;
