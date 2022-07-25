import React, {FC} from "react";
import {Outlet} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import LeftNavigation from "../components/Admin/Navigation/LeftNavigation";

const AdminApp: FC = () => {
    return (
        <Container fluid>
            <Row>
                <LeftNavigation/>
                <Outlet/>
            </Row>
        </Container>
    );
}

export default AdminApp;
