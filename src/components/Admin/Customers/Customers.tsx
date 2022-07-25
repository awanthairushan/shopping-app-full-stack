import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";
import CustomersList from "./CustomersList";

const Customers: FC = () => {
    return (
        <Row className='content-wrapper d-grid p-lg-4 mx-0 br'>
            <Row className='mx-0'>
                Customers
            </Row>
            <CustomersList/>
        </Row>
    );
}

export default Customers;
