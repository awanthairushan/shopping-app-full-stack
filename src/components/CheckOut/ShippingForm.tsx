import React, {FC} from "react";
import {Col, Form, FormControl, FormGroup, FormLabel, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";

const ShippingForm: FC = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <Form className="px-3 py-2 shipping-form">
            <FormLabel>Full Name*</FormLabel>
            <FormControl type="text" placeholder="Your Full Name"/>

            <FormLabel>Address*</FormLabel>
            <FormControl type="text" placeholder="Street Address"/>

            <Row>
                <Col>
                    <FormLabel>City / suburb*</FormLabel>
                    <FormControl type="text" placeholder="City / suburb"/>
                </Col>
                <Col>
                    <FormLabel>Postal Code*</FormLabel>
                    <FormControl type="text" placeholder="Postal Code*"/>
                </Col>
                <Col>
                    <FormLabel>Country*</FormLabel>
                    <Select options={options} placeholder="Select..."/>
                </Col>
            </Row>

            <FormLabel>Contact Number*</FormLabel>
            <FormGroup>
                <InputGroup>

                    <InputGroup.Text>
                        <ReactCountryFlag
                            className="me-2"
                            countryCode="LK"
                            svg
                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/"
                            cdnSuffix="svg"
                            style={{
                                width: '1.5em',
                                height: '0.8em',
                                fontSize: '17px'
                            }}
                        />
                        +94
                    </InputGroup.Text>
                    <FormControl type="text" placeholder=""/>
                </InputGroup>
            </FormGroup>

            <Row>
                <Col>
                    <FormLabel>Email*</FormLabel>
                    <FormControl type="email" placeholder="Email"/>
                </Col>
                <Col>
                    <FormLabel>Retype Email*</FormLabel>
                    <FormControl type="email" placeholder=""/>
                </Col>
            </Row>

            <FormLabel>Choose Your Password*</FormLabel>
            <FormControl type="password" placeholder="Street Address"/>
        </Form>
    );
}

export default ShippingForm;
