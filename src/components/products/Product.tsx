import React, {useEffect, useState} from 'react';
import {ICart, IProduct} from '../../Types/ShoppingTypes';
import {carrot, coconut, no_image} from "../../assets/images/images";
import {Button, Col, Form, Image, Row} from 'react-bootstrap';
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

type ProductProps = {
    product: IProduct,
    index: number,
    onCartItemCreate: (newItem: ICart) => void;
}
const Product: React.FC<ProductProps> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [url, setURL] = useState<string>('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    const user = localStorage.getItem('role');

    useEffect(() => {
        console.log(user)
        if(user == null || user == "nouser") {
            navigate('/loginpage');
        }
    }, []);

    const {onCartItemCreate} = props;
    const [quantity, setQuantity] = useState<number>(1);
    const {product, index} = props;
    const [cartBtnText, setCartBtnText] = useState('Add To Cart');
    const [cartBtnBackground, setCartBtnBackground] = useState('add-cart-btn');

    var imageLink;

    if (product.img === "carrot") {
        imageLink = carrot;
    } else if (product.img === "coconut") {
        imageLink = coconut;
    } else if (product.img === "noImage") {
        imageLink = no_image;
    } else {
        imageLink = product.img;
    }

    const handleOnQuantityChanged = (num: string) => {
        setQuantity(parseInt(num));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newItem: ICart = {name: product.name, price: product.price, quantity: quantity, img: product.img};
        onCartItemCreate(newItem);
        setQuantity(1);
    }
    const cartAdd = () => {
        setCartBtnText("Update");
        setCartBtnBackground("add-cart-btn-u");
    }
    return (
        <Col xs={6} md={4} lg={url === '/admin/products/addproduct' ? 6 : 3}
             className={url === '/admin/products/addproduct' ? 'mb-1 mb-sm-2 products ps-0' : 'mt-1 mb-1 mb-sm-2 products'}>
            <Row className='product-item'>
                {console.log( "hi" + user)}
                <Col sm={12} className='product-img'>
                    <Image src={imageLink} alt="product"/>
                </Col>
                <Col sm={12} className='product-name px-3'>
                    <p>{product.name}</p>
                </Col>
                <Col sm={12} className='product-price sm-1 px-4'>
                    <Row>
                        <Col xs={6} className='old-price ps-2'>
                            <p>Rs.{product.oldPrice}</p>
                        </Col>
                        <Col xs={6} className='new-price pe-2'>
                            <p>Rs.{product.price}</p>
                        </Col>
                    </Row>
                </Col>
                <Col className='px-4 mb-1'>
                    <Form noValidate onSubmit={handleSubmit} className='product-quentity'>
                        <Row className='mb-1'>
                            <Col xs={12} sm={5} md={4} lg={6} className="ps-2">
                                <Form.Group>
                                    <Form.Control type='number' min="1" value={quantity}
                                                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                                                      handleOnQuantityChanged(ev.target.value)
                                                  }/>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={7} md={8} lg={6} className='product-add-cart ps-sm-0 pe-2'>
                                <Button type='submit' variant="light" className={cartBtnBackground}
                                        onClick={cartAdd}
                                        disabled={url === '/admin/products/addproduct' ? true : false}
                                >{cartBtnText}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    )
}
export default Product;
