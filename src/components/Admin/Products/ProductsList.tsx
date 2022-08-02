import React, { FC } from "react";
import { Col, Row, Table } from "react-bootstrap";

const ProductsList: FC = () => {
    return (
        <Row className='mx-0 p-lg-4 content' >
            <Col>
                <p className="fs-5 bold">Product list</p>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th className="bold p-3">Product Name</th>
                            <th className="bold p-3">Category</th>
                            <th className="bold p-3">Price</th>
                            <th className="bold p-3">Quantity</th>
                            <th className="bold p-3">Inventory</th>
                            <th className="bold p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default ProductsList;