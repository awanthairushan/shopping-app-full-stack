import React, {FC, useCallback, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Select from 'react-select'
import NumberFormat from 'react-number-format';
import Product from "../../products/Product";
import {IProduct} from "../../../Types/ShoppingTypes";
import {Image, ThumbsUp} from "react-feather";

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

    const [image, setImage] = useState<any>(null);
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

    const handleImageChange = (event: any) => {
        const tempImage = event.target.files[0];
        setImage(tempImage);
        setIsImageUploaded(true);
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
                            <label className="custom-file-upload mt-0">
                                <span>
                                    <input type="file" className='d-none' onChange={handleImageChange}
                                           disabled={isImageUploaded}/>
                                    {
                                        isImageUploaded ?
                                            <ThumbsUp className='d-flex align-self-center mx-auto image-icon'/>
                                            :
                                            <Image className='d-flex align-self-center mx-auto image-icon'/>
                                    }
                                    <br/>
                                    {
                                        isImageUploaded ?
                                            <p>Image is uploaded</p>
                                            :
                                            <p>Click to upload the image</p>
                                    }
                                </span>
                            </label>
                        </Form.Group>

                    </Col>
                    <Col xs={6} className='product'>
                        <Form.Label>PRODUCT PREVIEW</Form.Label>
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
