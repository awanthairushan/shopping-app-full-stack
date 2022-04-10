import React, { useState } from 'react';
import { IProduct } from '../types/ShoppingTypes';
import { carrot, coconut } from "../../assets/images/images";
import { Button, Col, Image, Row, Form } from 'react-bootstrap';

type ProductProps = {
    product: IProduct,
    index: number,
}
const Product: React.FC<ProductProps> = (props) => {

    const [quentity, setQuentity] = useState<string>("0");
    const { product, index } = props;
    var imglink;

    if (product.img == "carrot") {
        imglink = carrot;
    } else if (product.img == "coconut") {
        imglink = coconut;
    }

    const PriceShow = () => {
        console.log(quentity);
        if (product.oldprice == null) {
            return (
                <Row>
                    <Col xs={12} className='new-price old-price-null'>
                        <h4>Rs.{product.price}</h4>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col xs={12} sm={6} className='new-price'>
                        <h4>Rs.{product.price}</h4>
                    </Col>
                    <Col xs={12} sm={6} className='old-price'>
                        <h5><span className="strikediag"> Rs.{product.oldprice} </span></h5>
                    </Col>
                </Row>
            )
        }
    }

    const handleOnQuentityChanged = (num: string) => {
        setQuentity(num);
    }

    const handleSubmit = () => {

    }
    return (
        <Col xs={6} md={4} lg={3} className='mb-2 mb-md-3 px-1 px-md-2'>
            <Row className='product-item'>
                <Col sm={12} className='product-img'>
                    <Image src={imglink} alt="product-img" />
                </Col>
                <Col sm={12} className='product-name mb-sm-2'>
                    <h4>{product.name}</h4>
                </Col>
                <Col sm={12} className='product-price sm-1 mb-sm-4'>
                    {PriceShow()}
                </Col>
                <Col xs={12} sm={5} className='mb-1 mb-sm-4'>
                    <Form noValidate onSubmit={handleSubmit} className='product-quentity'>
                        <Form.Group className="">
                            <Form.Control type='number' min="0" value={quentity}
                                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                    handleOnQuentityChanged(ev.target.value)
                                } />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={7} className='product-add-cart mb-4 ps-sm-0'>
                    <Button variant="light" className='add-cart-btn'>Add To Cart</Button>
                </Col>
            </Row>
        </Col>
    )
}
export default Product;