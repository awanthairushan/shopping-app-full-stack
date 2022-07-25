import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";
import ProductsList from "./ProductsList";

const Products: FC = () => {
    return (
        <Row className='content-wrapper d-grid p-lg-4 mx-0 br'>
            <Row className='mx-0'>
                Products
            </Row>
            <ProductsList/>
        </Row>
    );
}

export default Products;
