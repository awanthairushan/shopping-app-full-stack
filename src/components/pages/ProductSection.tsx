import React, { useState } from 'react';
import { IProduct } from '../types/ShoppingTypes';
import Product from './Product';

const ProductSection = () => {

    const productList:IProduct[] =[
        {name:"product 1",price:65, oldprice:65, img:"coconut"},
        {name:"product 2",price:65, oldprice:null, img:"carret"},
        {name:"product 3",price:65, oldprice:null, img:"coconut"},
        {name:"product 4",price:65, oldprice:65, img:"carret"},
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
            <ul className="">
                {products.map((product: IProduct, index: number) => (
                    <Product
                        product={product}
                        index={index}
                        key={index}
                    />
                ))}
            </ul>
        );
    };
    return (
        <div>
            {renderProducts()}
        </div>
    )
}
export default ProductSection;