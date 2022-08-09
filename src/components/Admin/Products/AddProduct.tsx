import React, {FC, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Select from 'react-select'
import NumberFormat from 'react-number-format';
import Product from "../../products/Product";
import {IProduct} from "../../../Types/ShoppingTypes";

const categoryOptions = [
    {value: 'grocery', label: 'Grocery'},
    {value: 'food', label: 'Food'},
    {value: 'pharmacy', label: 'Pharmacy'},
    {value: 'electronic', label: 'Electronic'}
];

const statusOptions = [
    {value: 'inStock', label: 'In Stock'},
    {value: 'outOfStock', label: 'Out Of Stock'},
]

const AddProduct: React.FC = () => {

    const [product, setProduct] = useState<IProduct>({
        name: "product 1",
        price: "65.34",
        oldPrice: "65.00",
        img: "coconut",
        category: "Food"
    });

    const onCartItemCreate = () => {

    }

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
                            <Form.Label>QUANTITY</Form.Label>
                            <Form.Control placeholder="Enter Product Quantity"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control placeholder="Enter Product Price" as={NumberFormat} thousandSeparator={true}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>PRODUCT CATEGORY</Form.Label>
                            <Select options={categoryOptions} placeholder="Select Product Category" isClearable={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>STATUS</Form.Label>
                            <Select options={statusOptions} isClearable={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>DISCOUNTED PRICE</Form.Label>
                            <Form.Control placeholder="Enter discounted Price" as={NumberFormat}
                                          thousandSeparator={true}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>PRODUCT IMAGE</Form.Label>
                            <Form.Control type='file' className='custom-file-label'/>
                        </Form.Group>
                    </Col>
                    <Col xs={6} className='product'>
                        <Form.Label>PRODUCT IMAGE</Form.Label>
                        <Product
                            product={product}
                            index={1}
                            onCartItemCreate={onCartItemCreate}
                        />
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}

export default AddProduct
