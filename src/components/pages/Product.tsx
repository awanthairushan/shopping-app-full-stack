import React from 'react';
import { IProduct } from '../types/ShoppingTypes';
import { carrot, coconut } from "../../assets/images/images";
import { Button, Col, Image, Row } from 'react-bootstrap';

type ProductProps = {
    product: IProduct,
    index: number,
}
const Product: React.FC<ProductProps> = (props) => {

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
                    <Col xs={6} className='new-price'>
                        <h4>Rs.{product.price}</h4>
                    </Col>
                    <Col xs={6} className='old-price'>
                        <h5>Rs.{product.oldprice}</h5>
                    </Col>
                </Row>
            )
        }
    }
    return (
        <Col sm={6} md={4} lg={3}>
            <Row className='product-item'>
                <Col sm={12} className='product-img'>
                    <Image src={imglink} alt="product-img" />
                </Col>
                <Col sm={12} className='product-name mb-2'>
                    <h4>{product.name}</h4>
                </Col>
                <Col sm={12} className='product-price mb-4'>
                    {PriceShow()}
                </Col>
                <Col xs={4} className=' mb-4'>
                    <Row className='product-quentity'>
                        <Col xs={9}>
                        </Col>
                        <Col xs={3}>
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={8} className='product-add-cart mb-4'>
                <Button variant="light" className='add-cart-btn'>Add To Cart</Button>
                </Col>
            </Row>
        </Col>
    )
}
export default Product;


{/* <img src={imglink}/>
            
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.oldprice}</p>
        </div> */}