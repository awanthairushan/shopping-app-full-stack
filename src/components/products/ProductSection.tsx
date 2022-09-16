import React from 'react';
import {ICart} from '../../Types/ShoppingTypes';
import productsList from '../../assets/data/products.json';
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux/slices/ProductSlice";
import {useAppSelector} from "../../hooks/hooks";
import {IProduct} from "../../Types/IProduct";
import Product from "./Product";

type ProductSectionProps = {
    selectedCategory: String,
    onCartItemCreate: (newItem: ICart) => void;
}


const ProductSection: React.FC<ProductSectionProps> = (props) => {
    const dispatch = useDispatch();
    dispatch(setProducts(productsList.products));
    const products = useAppSelector((state => state.products.products))
    const {onCartItemCreate, selectedCategory} = props;
    console.log(products);

    if (products.length === 0) {
        return (
            <p className="">
                <i>No Product List Here</i>
            </p>
        );
    }

    // if (selectedCategory === 'All') {
    //     return (
    //         <>
    //             {/*{*/}
    //             {/*    categoryDateList.forEach((category, index) => {*/}
    //             {/*        console.log(category);*/}
    //             {/*    })*/}
    //             {/*}*/}
    //         </>
    //     );
    // }
    return (
        <>
            {/*<h1>Hello</h1>*/}

            {products.filter(products => products.category === selectedCategory).map((product: IProduct, index: number) => (
                    <Product
                        product={product}
                        index={index}
                        key={index}
                        onCartItemCreate={onCartItemCreate}
                    />
                )
            )}
        </>
    );
}

// return (
//     <Row className='product mb-5 mx-0 mx-lg-5 px-lg-4'>
//
//         {/*{renderProducts(products)}*/}
//         <p className='my-2 catagery-types-text'>Fruits</p>
//         {/*{renderProducts(products)}*/}
//         <p className='my-2 catagery-types-text'>Vegetables</p>
//         {/*{renderProducts(products)}*/}
//     </Row>
// )
// }
export default ProductSection;
