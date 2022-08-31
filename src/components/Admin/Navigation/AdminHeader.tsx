import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";
import {FiLogOut} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const AdminHeader: FC = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('role', "nouser")
        navigate('/loginpage');

    };

    return (
        <Row lg={2} className='admin-header px-lg-4 mx-0 align-items-center '>
            <Col lg={11}/>
            <Col lg={1} className='px-0 '>
                    <div className='header-text me-2'>Log Out</div>
                    <FiLogOut size='25' className='justify-content-end' onClick={handleLogout}/>

            </Col>
        </Row>
    );
}

export default AdminHeader;
