import React, {FC} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Select from 'react-select'
import NumberFormat from 'react-number-format';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const AddProduct: React.FC = () => {
    return (
        <Col className='content mx-0 p-lg-4'>
            <h5 className='font-weight-bold'>Basic Information</h5>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>PRODUCT NAME</Form.Label>
                            <Form.Control placeholder="Enter Product Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PRODUCT QUANTITY</Form.Label>
                            <Form.Control placeholder="Enter Product Quantity"/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>PRODUCT CATEGORY</Form.Label>
                            <Select options={options} placeholder="Enter Product Category" isClearable={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PRODUCT PRICE</Form.Label>
                            <Form.Control placeholder="Enter Product Price" as={NumberFormat} thousandSeparator={true}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>PRODUCT IMAGE</Form.Label>
                            <Form.Control type='file' className='custom-file-label'/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}

export default AddProduct
