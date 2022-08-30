import React from 'react';
import {ICart} from '../../Types/ShoppingTypes';
import {Row} from 'react-bootstrap';
import productsList from '../../assets/data/products.json';
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux/slices/ProductSlice";
import {useAppSelector} from "../../hooks/hooks";
import {IProduct} from "../../Types/IProduct";

type ProductSectionProps = {
    selectedCategory: String,
    onCartItemCreate: (newItem: ICart) => void;
}


const ProductSection: React.FC<ProductSectionProps> = (props) => {
    const dispatch = useDispatch();
    dispatch(setProducts(productsList.products));

    const products = useAppSelector((state => state.products.products))
    // const selectedCategory
    const {onCartItemCreate, selectedCategory} = props;

    // const productList: IProduct[] = [
    //     {name: "product 1", price: "65.34", oldPrice: "65.00", img: "coconut", category: "Food"},
    //     {name: "product 2", price: "65.45", oldPrice: "65.00", img: "carrot", category: "Grocery"},
    //     {name: "product 3", price: "65.00", oldPrice: "65.00", img: "coconut", category: "Pharmacy"},
    //     {name: "product 4", price: "65.00", oldPrice: "65.00", img: "carrot", category: "Electronic"},
    //     {name: "product 1", price: "65.34", oldPrice: "65.00", img: "coconut", category: "Food"},
    //     {name: "product 2", price: "65.45", oldPrice: "65.00", img: "carrot", category: "Grocery"},
    //     {name: "product 3", price: "65.00", oldPrice: "65.00", img: "coconut", category: "Pharmacy"},
    //     {name: "product 4", price: "65.00", oldPrice: "65.00", img: "carrot", category: "Electronic"},
    // ];
    // // const [products, setProducts] = useState<IProduct[]>(productList);

    if (products.length === 0) {
        return (
            <p className="">
                <i>No Product List Here</i>
            </p>
        );
    }

    const renderProducts = () => {
        if (selectedCategory === 'All') {
            return (
                <>
                    {products.map((product: IProduct, index: number) => (
                        console.log(product)
                    ))}
                </>
            );
        }
        // return (
        //     <>
        //         {products.filter(products => products.category === selectedCategory).map((product: IProduct, index: number) => (
        //                 <Product
        //                     product={product}
        //                     index={index}
        //                     key={index}
        //                     onCartItemCreate={onCartItemCreate}
        //                 />
        //             )
        //         )}
        //     </>
        // );
    }

    return (
        <Row className='product mb-5 mx-0 mx-lg-5 px-lg-4'>
            <p className='my-2 catagery-types-text'>Grocery</p>
            {/*{renderProducts(products)}*/}
            <p className='my-2 catagery-types-text'>Fruits</p>
            {/*{renderProducts(products)}*/}
            <p className='my-2 catagery-types-text'>Vegetables</p>
            {/*{renderProducts(products)}*/}
        </Row>
    )
}
export default ProductSection;
