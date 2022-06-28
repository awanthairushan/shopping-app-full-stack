import React, {ChangeEvent, FC, useState} from "react";
import {Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import {FaRegCreditCard, FaRegMoneyBillAlt} from "react-icons/fa";

import cash from '../../assets/images/CheckOutForm/cash.png';
import card from '../../assets/images/CheckOutForm/creditCard.png';

const ChangeShippingAddressSection: FC = () => {

    const [isSameUserAddress, setIsSameUserAddress] = useState<boolean>(false);

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
        console.log(e.target.id)
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
                    <Row className='mx-3' >
                        <Col className='payment-method-card px-0 me-2' id='card' onChange={handleOnPaymentTypeSelect}>
                            <FormLabel className='d-grid justify-content-center m-0'>
                                <input type='radio' name='payment-method' value='cash'/>
                                <FaRegCreditCard fontSize='100px' display='block'/>
                                <p>Credit/Debit Card</p>
                            </FormLabel>
                        </Col>
                        <Col className='payment-method-card px-0 ms-3' id='cash' onChange={handleOnPaymentTypeSelect}>
                            <FormLabel className='d-grid justify-content-center'>
                                <input type='radio' name='payment-method' value='card'/>
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
