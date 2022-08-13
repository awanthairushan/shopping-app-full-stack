import React, {FC, useEffect, useState} from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
// import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";
import {ChevronRight, Plus,} from "react-feather";
import ProductsTable from "./ProductsTable";
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";

const Products: FC = () => {

    const location = useLocation();
    const [url, setURL] = useState<string>('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    return (
        <Row className='content-wrapper d-grid p-lg-4 pt-lg-2 mx-0'>
            <Col xs={12}>
                <Navbar className='bg-transparent' expand="lg">
                    <Nav.Item as={Link} to='/admin/products' className={url === '/admin/products' ? 'p-0 text-decoration-none text-dark pe-none' : 'p-0 text-decoration-none'}>Products</Nav.Item>
                    <ChevronRight className='chevron-right-icon'/>
                    <Nav.Item  as={Link} to='/admin/products/addproduct' className={url === '/admin/products/addproduct' ? 'p-0 text-decoration-none text-dark pe-none' : 'p-0 text-decoration-none'}>Add Product</Nav.Item>
                </Navbar>
            </Col>
            <Row className='mx-0 p-0 pb-lg-4'>
                <Col className="admin-product">
                    <p className="m-0 fs-4">Products</p>
                </Col>
                <Col className="d-flex justify-content-end p-0">
                    <div className="add-product fs-6"><Link to='/admin/products/addproduct'
                                                            className='text-decoration-none text-reset'><Plus/> Add
                        Products</Link></div>
                </Col>
            </Row>
            {/*<ProductsTable/>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/' element={<ProductsTable/>}/>*/}
            {/*        <Route path='/addproduct' element={<AddProduct/>}/>*/}
            {/*    </Routes>*/}
            {/*<AddProduct/>*/}
            <ProductsTable/>
        </Row>
    );
}

export default Products;
