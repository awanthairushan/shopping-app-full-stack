import React from 'react';
import { IProduct } from '../types/ShoppingTypes';
import { carret, coconut} from "../../assets/images/images";

type ProductProps = {
    product: IProduct,
    index: number,
}
const Product:React.FC<ProductProps> = (props) => {

    const {product, index} = props;
    var imglink;

    if(product.img == "carret"){
        imglink=carret;
    }else if(product.img == "coconut"){
        imglink = coconut;
    }

    return(
        <div>
            <img src={imglink}/>
            
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.oldprice}</p>
        </div>
    )
}
export default Product;