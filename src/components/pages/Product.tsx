import React, { useState } from 'react';
import { ICart, IProduct } from '../../Types/ShoppingTypes';
import { carrot, coconut } from "../../assets/images/images";
import { Button, Col, Image, Row, Form, Alert } from 'react-bootstrap';

type ProductProps = {
    product: IProduct,
    index: number,
    onCartItemCreate: (newItem: ICart) => void;
}
const Product: React.FC<ProductProps> = (props) => {

    const { onCartItemCreate } = props;
    const [quentity, setQuentity] = useState<string>("1");
    const { product, index } = props;
    var imglink;

    if (product.img == "carrot") {
        imglink = carrot;
    } else if (product.img == "coconut") {
        imglink = coconut;
    }

    const PriceShow = () => {
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

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newItem: ICart = { name: product.name, price: product.price, quentity: quentity, img: product.img };
        onCartItemCreate(newItem);
        setQuentity("1");
    }
    return (
        <Col xs={6} md={4} lg={3} className='mb-2 mb-md-3 px-1 px-md-2'>
            <Row className='product-item'>
                <Col sm={12} className='product-img'>
                    <Image src={imglink} alt="product img" />
                </Col>
                <Col sm={12} className='product-name mb-sm-2'>
                    <h4>{product.name}</h4>
                </Col>
                <Col sm={12} className='product-price sm-1 mb-sm-4'>
                    {PriceShow()}
                </Col>
                <Col>
                    <Form noValidate onSubmit={handleSubmit} className='product-quentity'>
                        <Row>
                            <Col xs={12} sm={5} md={4} className='mb-1 mb-sm-4'>
                                <Form.Group className="">
                                    <Form.Control type='number' min="1" value={quentity}
                                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                            handleOnQuentityChanged(ev.target.value)
                                        } />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={7} md={8} className='product-add-cart mb-4 ps-sm-0'>
                                <Button type='submit' variant="light" className='add-cart-btn py-1'>Add To Cart</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    )
}
export default Product;