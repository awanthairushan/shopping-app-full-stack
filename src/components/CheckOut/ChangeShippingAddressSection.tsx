import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import {FaRegCreditCard, FaRegMoneyBillAlt} from "react-icons/fa";

import cash from '../../assets/images/CheckOutForm/cash.png';
import card from '../../assets/images/CheckOutForm/creditCard.png';

const ChangeShippingAddressSection: FC = () => {

    const [isSameUserAddress, setIsSameUserAddress] = useState<boolean>(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

    const handleOnRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        const radioID: string = e.target.id;
        switch (radioID) {
            case 'sameAddress':
                setIsSameUserAddress(true);
                break;
            case 'changeAddress':
                setIsSameUserAddress(false);
        }
    }

    const handleOnPaymentTypeSelect = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setSelectedPaymentMethod(e.target.value);
    }

    return (
        <Col className="px-0 mt-lg-4">
            <span>Change Shipping Address</span>
            <Form>
                <FormGroup className='float-start d-flex mt-lg-3'>
                    <FormCheck className='me-lg-3 ' id='sameAddress' name='userAddressCheck' type='radio'
                               label='Same as user address' onChange={handleOnRadioChange}/>
                    <FormCheck name='userAddressCheck' id='changeAddress' type='radio' label='Change shipping address'
                               onChange={handleOnRadioChange}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel className='mt-lg-4'>Add Delivery Instructions (Optional)</FormLabel>
                    <FormControl as='textarea' rows={3}/>
                </FormGroup>
                <FormLabel className='my-lg-2'>Payment Methods</FormLabel>

                <FormGroup className='payment-method'>
                    <Row className='mx-0 '>
                        <Col
                            className={'payment-method-card px-0 ms-0 me-4 ' + `${selectedPaymentMethod === 'card' ? 'selected-payment-method' : ''}`}
                            id='card'>
                            <FormLabel className='d-grid justify-content-center mx-0 my-2'>
                                <input className='payment-type-radio' type='radio' name='payment-method' value='card'
                                       onChange={handleOnPaymentTypeSelect}/>
                                <FaRegCreditCard fontSize='100px' display='block'/>
                                <p>Credit/Debit Card</p>
                            </FormLabel>
                        </Col>
                        <Col
                            className={'payment-method-card px-0 ms-4 ' + `${selectedPaymentMethod === 'cash' ? 'selected-payment-method' : ''}`}
                            id='cash'>
                            <FormLabel className='d-grid justify-content-center mx-0 my-2'>
                                <input className='payment-type-radio' type='radio' name='payment-method' value='cash'
                                       onChange={handleOnPaymentTypeSelect}/>
                                <FaRegMoneyBillAlt fontSize='100px'/>
                                <p>Cash on Delivery</p>
                            </FormLabel>
                        </Col>
                    </Row>

                </FormGroup>
            </Form>
        </Col>
    );
}
export default ChangeShippingAddressSection;
