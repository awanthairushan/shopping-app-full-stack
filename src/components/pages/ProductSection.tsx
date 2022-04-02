import React, { useState } from 'react';
import { IProduct } from '../types/ShoppingTypes';
import Product from './Product';
import { Row } from 'react-bootstrap';

const ProductSection = () => {

    const productList: IProduct[] = [
        { name: "product 1", price: "65.34", oldprice: "65.00", img: "coconut" },
        { name: "product 2", price: "65.45", oldprice: null, img: "carrot" },
        { name: "product 3", price: "65.00", oldprice: null, img: "coconut" },
        { name: "product 4", price: "65.00", oldprice: "65.00", img: "carrot" },
    ];
    const [products, setProducts] = useState<IProduct[]>(productList);

    if (products.length === 0) {
        return (
            <p className="">
                <i>No Product List Here</i>
            </p>
        );
    }

    const renderProducts = () => {
        return (
            <>
                {products.map((product: IProduct, index: number) => (
                    <Product
                        product={product}
                        index={index}
                        key={index}
                    />
                ))}
            </>
        );
    };
    return (
        <Row className='product mb-5'>
            {renderProducts()}
        </Row>
    )
}
export default ProductSection;