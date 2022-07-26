import React, {FC} from "react";
import {Outlet} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import LeftNavigation from "../components/Admin/Navigation/LeftNavigation";
import AdminHeader from "../components/Admin/Navigation/AdminHeader";

const AdminApp: FC = () => {
    return (
        <Container fluid className='vh-100'>
            <Row>
                <LeftNavigation/>
                <Col className='px-lg-0'>
                    <AdminHeader />
                    <Outlet/>
                </Col>

            </Row>
        </Container>
    );
}

export default AdminApp;
