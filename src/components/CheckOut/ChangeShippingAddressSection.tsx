import React, {ChangeEvent, FC, useState} from "react";
import {Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Image} from "react-bootstrap";
import {FaRegCreditCard, FaRegMoneyBillAlt} from "react-icons/fa";

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
                    <FormLabel>
                        <FaRegCreditCard id='abc' className='payment-method-icon'/>
                        <FormCheck name='paymentMethod' type='radio' label='Credit/Debit Card'/>
                    </FormLabel>
                    <FormLabel>
                        <FaRegMoneyBillAlt className='payment-method-icon'/>
                        <FormCheck name='paymentMethod' type='radio' label='Cash on Delivery'/>
                    </FormLabel>
                </FormGroup>
            </Form>
        </Col>
    );
}
export default ChangeShippingAddressSection;
