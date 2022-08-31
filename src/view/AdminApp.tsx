import React, {FC, useEffect} from "react";
import {Outlet} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import LeftNavigation from "../components/Admin/Navigation/LeftNavigation";
import AdminHeader from "../components/Admin/Navigation/AdminHeader";
import {useNavigate} from "react-router-dom";

const AdminApp: FC = () => {

    const navigate = useNavigate();
    const user = localStorage.getItem('role');

    useEffect(() => {
        console.log(user)
        if(user == null || user == "nouser") {
            navigate('/loginpage');
        }
    }, []);
    return (
        <Container fluid className='vh-100'>
            {console.log("hi")}
            <Row className='h-100'>
                <LeftNavigation/>
                <Col className='px-lg-0 h-100'>
                    <AdminHeader/>
                    <Outlet/>
                </Col>

            </Row>
        </Container>
    );
}

export default AdminApp;
