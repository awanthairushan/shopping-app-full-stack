import React, {useEffect, useState} from "react";
import {Button, Col, Form, Nav, Navbar, Row} from "react-bootstrap";
import Select from 'react-select'
import NumberFormat from 'react-number-format';
import Product from "../../products/Product";
import {IProduct} from "../../../Types/ShoppingTypes";
import {ChevronRight, Image, ThumbsUp} from "react-feather";
import {Link, useLocation} from "react-router-dom";

const categoryOptions = [
    {value: 'grocery', label: 'Grocery'},
    {value: 'food', label: 'Food'},
    {value: 'pharmacy', label: 'Pharmacy'},
    {value: 'electronic', label: 'Electronic'}
];

const AddProduct: React.FC = () => {

    const location = useLocation();
    const [url, setURL] = useState<string>('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    const onCartItemCreate = () => {
    }

    const [productName, setProductName] = useState<string>("Name");
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<string>("0");
    const [productDiscountedPrice, setProductDiscountedPrice] = useState<string>("0");



    const [image, setImage] = useState<any>("noImage");

    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

    const handleImageChange = (event: any) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setIsImageUploaded(true);
    }


    const handleOnImageRemoveClick = () => {
        setIsImageUploaded(false);
        setImage("noImage");
    }

    const handleOnProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value);
    }

    const handleOnProductQuantityChange = (values: any) => {
        setProductQuantity(values.floatValue);
    }

    const handleOnProductPriceChange = (values: any) => {
        setProductPrice(values.floatValue);
    }
    const handleOnProductDiscountedPriceChange = (values: any) => {
        setProductDiscountedPrice(values.floatValue);
    }

    useEffect(() => {
        setProduct({
            name: productName,
            price: productDiscountedPrice,
            oldPrice:productPrice,
            img: image,
            category: "Food"
        })
    }, [productName, productPrice, productDiscountedPrice, image])

    const [product, setProduct] = useState<IProduct>({
        name: "Name",
        price: "D Price",
        oldPrice: "Price",
        img: "coconut",
        category: "Food"
    });

    return (
        <Row className='content-wrapper d-grid p-lg-4 pt-lg-2 mx-0 '>
            <Row className='mx-0 p-0 pb-lg-4'>
                <Col xs={12}>
                    <Navbar className='bg-transparent' expand="lg">
                        <Nav.Item as={Link} to='/admin/products'
                                  className={url === '/admin/products' ? 'p-0 text-decoration-none text-dark pe-none' : 'p-0 text-decoration-none'}>Products</Nav.Item>
                        <ChevronRight className='chevron-right-icon'/>
                        <Nav.Item as={Link} to='/admin/products/addproduct'
                                  className={url === '/admin/products/addproduct' ? 'p-0 text-decoration-none text-dark pe-none' : 'p-0 text-decoration-none'}>Add
                            Product</Nav.Item>
                    </Navbar>
                </Col>
                <Col className="admin-product" xs={12}>
                    <p className="m-0 fs-4">New Product</p>
                </Col>
            </Row>
            <Col className='content mx-0 p-lg-4 admin-add-product'>
                <h5 className='font-weight-bold'>Basic Information</h5>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3 data-field">
                                <Form.Label>PRODUCT NAME</Form.Label>
                                <Form.Control type='text' placeholder="Enter Product Name" required pattern="[A-Za-z]+"
                                              onChange={handleOnProductNameChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3 data-field">
                                <Form.Label>QUANTITY</Form.Label>
                                <Form.Control type='number' placeholder="Enter Product Quantity" min='0'
                                              as={NumberFormat}
                                              allowNegative={false} required
                                              onValueChange={handleOnProductQuantityChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>PRICE</Form.Label>
                                <Form.Control placeholder="Enter Product Price" as={NumberFormat} allowNegative={false}
                                              thousandSeparator={true} required
                                              onValueChange={handleOnProductPriceChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>PRODUCT CATEGORY</Form.Label>
                                <Select options={categoryOptions} placeholder="Select Product Category"
                                        isClearable={true}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>STATUS</Form.Label>
                                <Form.Control type='text' value={productQuantity === 0 ? 'Out Of Stock' : 'In Stock'}
                                              disabled={true}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>DISCOUNTED PRICE</Form.Label>
                                <Form.Control placeholder="Enter discounted Price" as={NumberFormat}
                                              thousandSeparator={true} allowNegative={false} required
                                              onValueChange={handleOnProductDiscountedPriceChange}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>DESCRIPTION</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter Product description"/>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>PRODUCT IMAGE</Form.Label>

                                <label
                                    className={isImageUploaded ? 'custom-file-upload mt-0 custom-file-upload-active' : 'custom-file-upload mt-0'}>
                                <span className='w-100'>
                                    <input type="file" className='d-none' onChange={handleImageChange}
                                           disabled={isImageUploaded}/>
                                    {
                                        isImageUploaded ?

                                            <div>
                                                {/*<Col xs={12}>*/}
                                                <ThumbsUp className='d-flex align-self-center mx-auto image-icon'/>
                                                <br/>
                                                <div className='d-flex justify-content-center'>
                                                    <p>Image is uploaded</p>
                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <Button variant="warning" onClick={handleOnImageRemoveClick}>Remove
                                                        Image</Button>
                                                </div>
                                                {/*</Col>*/}
                                                {/*<Col xs={8} className='d-flex justify-content-center'>*/}
                                                {/*    <img src={image} className='uploaded-image' alt='Uploaded'/>*/}
                                                {/*</Col>*/}
                                            </div>
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
        </Row>
    );
}

export default AddProduct
