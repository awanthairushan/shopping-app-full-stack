import React, {FC, useEffect, useState} from "react";
import {Col, Row, Table} from "react-bootstrap";
import allProducts from '../../../assets/data/products.json';
import ProductTableItem from "./ProductTableItem";

const ProductsTable: FC = () => {
    const products = allProducts.products;
    const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,];
    const [paginationNum, setPaginationNum] = useState<number[]>([1])
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        let num = productList.length / 10;
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(i + 1);
        }
        // setPaginationNum(arr)
    }, [productList]);

    const setActive = (num: number) => {
        setPage(num);
    }
    const clickBack = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    }
    const clickNext = () => {
        if (page <= productList.length / 10)
            setPage(page + 1);
    }
    if (productList.length === 0) {
        return (
            <p className="mt-2">
                <i>No Product Listed Here</i>
            </p>
        );
    }

    const renderProducts = () => {
        return (
            <tbody>
            {
                // productList.slice(page * 10 - 10, page * 10).map((product: number, index: number) => (
                //     <ProductsListItem/>
                // ))

                products.map((product, index) => {
                    if (index < 6) {
                        return <ProductTableItem product={product} key={index}/>
                    }
                })


            }
            </tbody>
        );
    };

    const renderPagination = () => {
        return (
            <>
                {
                    paginationNum.map((product: number, index: number) => (
                        <a href="#" className={page == product ? "active" : ""}
                           onClick={() => setActive(product)}>{product}</a>

                    ))
                }
            </>
        );
    };

    return (
        <Row className='mx-0 p-lg-4 content h-100'>
            <Col>
                <p className="fs-5 bold">Product list</p>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th className="bold  py-3 px-0">Product Name</th>
                        <th className="bold  py-3 px-0">Category</th>
                        <th className="bold  py-3 px-0">Price</th>
                        <th className="bold  py-3 px-0">Quantity</th>
                        <th className="bold  py-3 px-0">Inventory</th>
                        <th className="bold  py-3 px-0">Action</th>
                    </tr>
                    </thead>
                    {renderProducts()}
                </Table>


                {/*<Row className="admin-pagi">*/}
                {/*    <div className="pagination">*/}
                {/*        <a href="#" className="links" onClick={() => clickBack()}>&laquo; Prev</a>*/}
                {/*        {renderPagination()}*/}
                {/*        /!* <a href="#">1</a>*/}
                {/*        <a href="#" className="active">2</a>*/}
                {/*        <a href="#">3</a>*/}
                {/*        <a href="#">4</a>*/}
                {/*        <a href="#">5</a>*/}
                {/*        <a href="#">6</a> *!/*/}
                {/*        <a href="#" className="links" onClick={() => clickNext()}>Next &raquo;</a>*/}
                {/*    </div>*/}
                {/*</Row>*/}
            </Col>
        </Row>
    );
}

export default ProductsTable;
