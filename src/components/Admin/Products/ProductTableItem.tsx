import React, {FC} from "react";
import {Col, Image, Row} from "react-bootstrap";
import AppleImage from "../../../assets/images/prodcuts/Apple.jpg"
import {Edit2, Eye, Trash2} from "react-feather";
import {IProduct} from "../../../Types/IProduct";
import {BsFillCircleFill} from "react-icons/bs";

type ProductTableItemProps = {
    product: IProduct
}


const ProductsListItem: FC<ProductTableItemProps> = (product) => {
    const productItem = product.product;
    let temp_products = [
        {
            "image": AppleImage,
            "name": "product1",
            "desc1": "description1",
            "desc2": "descriptio1_2",
            "category": 10,
            "price": 100,
            "qty": 10,
            "inventory": "In-Stock"
        },
        {
            "image": AppleImage,
            "name": "product2",
            "desc1": "description2",
            "desc2": "descriptio2_2",
            "category": 20,
            "price": 200,
            "qty": 20,
            "inventory": "In-Stock"
        },
        {
            "image": AppleImage,
            "name": "product3",
            "desc1": "description3",
            "desc2": "descriptio3",
            "category": 30,
            "price": 300,
            "qty": 30,
            "inventory": "In-Stock"
        },
    ];

    const listItems = temp_products.map((product) =>
        <li>{product.inventory}</li>
    );

    const renderInventory = (qty: number) => {
        return qty === 0 ?
            <label className='d-flex align-items-center'>
                <BsFillCircleFill color={'#F42B3D'}/>
                <span className='ms-lg-1' style={{color: "#F42B3D"}}> Out Of Stock</span>
            </label> :
            <label className='d-flex align-items-center'>
                <BsFillCircleFill color={'#32CC96'}/>
                <span className='ms-lg-1' style={{color: "#32CC96"}}>In Stock</span>
            </label>;
    }
    return (
        <tr className='product-table-item'>
            <td className="px-lg-0 py-1">
                <Row className='mx-0'>
                    <Col xs={2} className="px-lg-0 py-lg-2">
                        <Image src={productItem.image} className="product-item-image"/>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col xs={12}>{productItem.name}</Col>
                            <Col xs={12}>{productItem.id}</Col>
                        </Row>
                    </Col>
                </Row>
            </td>
            <td className="p-lg-0 py-1">
                {productItem.category}
            </td>
            <td className="p-lg-0 py-1">
                Rs.{(Math.round(productItem.price * 100) / 100).toFixed(2)}
            </td>
            <td className="p-lg-0 py-1">
                {productItem.quantity}
            </td>
            <td className="p-lg-0 py-1">
                {renderInventory(productItem.quantity)}
            </td>
            <td className="p-lg-0 py-1">
                <Row className='mx-0'>
                    <Col className='d-flex px-0 product-table-item-actions justify-content-around'>
                        <Eye className="btn-eye" size={'18px'} color={'black'}/>
                        <Edit2 className="btn-edit" size={'18px'} color={'#D0A617'}/>
                        <Trash2 className="btn-trash2" size={'18px'} color={'#F42B3D'}/>
                    </Col>
                </Row>
            </td>
        </tr>
    )
        ;
}

export default ProductsListItem;

