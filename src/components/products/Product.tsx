import React, { useState } from 'react';
import { ICart, IProduct } from '../../Types/ShoppingTypes';
import { carrot, coconut } from "../../assets/images/images";
import { Button, Col, Image, Row, Form } from 'react-bootstrap';

type ProductProps = {
    product: IProduct,
    index: number,
    onCartItemCreate: (newItem: ICart) => void;
}
const Product: React.FC<ProductProps> = (props) => {

    const { onCartItemCreate } = props;
    const [quentity, setQuentity] = useState<number>(1);
    const { product, index } = props;
    const [cartBtnText, setCartBtnText] = useState('Add To Cart');
    const [cartBtnBackground, setCartBtnBackground] = useState('add-cart-btn');

    var imglink;

    if (product.img === "carrot") {
        imglink = carrot;
    } else if (product.img === "coconut") {
        imglink = coconut;
    }

    const handleOnQuentityChanged = (num: string) => {
        setQuentity(parseInt(num));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newItem: ICart = { name: product.name, price: product.price, quentity: quentity, img: product.img };
        onCartItemCreate(newItem);
        setQuentity(1);
    }
    const cartAdd = () => {
        setCartBtnText("Update");
        setCartBtnBackground("add-cart-btn-u");
    }
    return (
        <Col xs={6} md={4} lg={3} className='mt-1 mb-1 mb-sm-2 products'>
            <Row className='product-item'>
                <Col sm={12} className='product-img mt-1'>
                    <Image src={imglink} alt="product img" />
                </Col>
                <Col sm={12} className='product-name px-3'>
                    <p>{product.name}</p>
                </Col>
                <Col sm={12} className='product-price sm-1 px-4'>
                    <Row>
                        <Col xs={6} className='old-price'>
                            <p>Rs.{product.oldprice}</p>
                        </Col>
                        <Col xs={6} className='new-price'>
                            <p>Rs.{product.price}</p>
                        </Col>
                    </Row>
                </Col>
                <Col className='px-4 mb-1'>
                    <Form noValidate onSubmit={handleSubmit} className='product-quentity'>
                        <Row className='mb-1'>
                            <Col xs={12} sm={5} md={4} className="px-0">
                                <Form.Group>
                                    <Form.Control type='number' min="1" value={quentity}
                                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                            handleOnQuentityChanged(ev.target.value)
                                        } />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={7} md={8} className='product-add-cart ps-sm-0 px-0'>
                                <Button type='submit' variant="light" className={cartBtnBackground} onClick={cartAdd}>{cartBtnText}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    )
}
export default Product;