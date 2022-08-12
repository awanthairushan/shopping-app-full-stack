import React, {FC, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
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

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    const onCartItemCreate = () => {
    }

    const [image, setImage] = useState<any>(null);
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

    const handleImageChange = (event: any) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setIsImageUploaded(true);
    }

    return (
        <Col className='content mx-0 p-lg-4'>
            <h5 className='font-weight-bold'>Basic Information</h5>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3 data-field">
                            <Form.Label>PRODUCT NAME</Form.Label>
                            <Form.Control type='text' placeholder="Enter Product Name" required pattern="[A-Za-z]+"/>
                        </Form.Group>
                        <Form.Group className="mb-3 data-field">
                            <Form.Label>QUANTITY</Form.Label>
                            <Form.Control type='number' placeholder="Enter Product Quantity" as={NumberFormat} allowNegative={false} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control placeholder="Enter Product Price" as={NumberFormat} allowNegative={false} thousandSeparator={true} required/>
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
                                          thousandSeparator={true} allowNegative={false} required/>
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
                                <span className='w-100'>
                                    <input type="file" className='d-none' onChange={handleImageChange}
                                           disabled={isImageUploaded}/>
                                    {
                                        isImageUploaded ?
                                            <Row className='d-flex align-items-center justify-content-center w-100'>
                                                <Col xs={4}>
                                                    <ThumbsUp className='d-flex align-self-center mx-auto image-icon'/>
                                                    <br/>
                                                    <p>Image is uploaded</p>
                                                </Col>
                                                <Col xs={8} className='d-flex justify-content-center'>
                                                    <img src={image} className='uploaded-image'/>
                                                </Col>
                                            </Row>

                                            :
                                            <div>
                                                <Image className='d-flex align-self-center mx-auto image-icon'/>
                                                <br/>
                                                <div className='d-flex justify-content-center'>
                                                    <p>Click to upload the image</p>
                                                </div>
                                            </div>
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
                    <Col xs={12} className='d-flex justify-content-end'>
                        <Button className='create-product-button mb-3 px-4 py-2' type="submit">
                            Create Product
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}

export default AddProduct
