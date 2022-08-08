import React, {FC} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Plus} from "react-feather";
import ProductsList from "./ProductsList";

const Products: FC = () => {
    return (
        <Row className='content-wrapper d-grid p-lg-4 mx-0'>
            <Row className='mx-0 p-0 pb-lg-4'>
                <Col className="admin-product">
                    <p className="m-0 fs-3">Products</p>
                </Col>
                <Col className="d-flex justify-content-end p-0">
                    <Button className="add-product fs-6"> <Plus/> Add Products</Button>
                </Col>
            </Row>
            <ProductsList />
        </Row>
    );
}

export default Products;
