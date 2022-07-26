import React, {FC, useEffect, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../../assets/images/LOGO.png";
import {FiHome, FiPercent, FiShoppingCart, FiTag, FiUser, FiUsers} from "react-icons/fi";

const LeftNavigation: FC = () => {

    const location = useLocation();
    const [url, setURL] = useState<string>('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);


    return (
        <Col lg={2} className='left-navigation px-0'>
            <div className='logo-text px-lg-4 py-lg-4 fs-2'>
                LOGO
            </div>
            <ul className='list-unstyled px-0 nav-list'>
                <Link to='/dashboard' className={url === '/dashboard' ? 'active' : ''}>
                    <li className='px-lg-4 '>
                        <FiHome/>
                        Dashboard
                    </li>
                </Link>
                <Link to='/products' className={url === '/products' ? 'active' : ''}>
                    <li className='px-lg-4'>
                        <FiTag/>
                        Products
                    </li>
                </Link>
                <Link to='/customers' className={url === '/customers' ? 'active' : ''}>
                    <li className='px-lg-4'>
                        <FiUsers/>
                        Customers
                    </li>
                </Link>
                <Link to='/orders' className={url === '/orders' ? 'active' : ''}>
                    <li className='px-lg-4'>
                        <FiShoppingCart/>
                        Orders
                    </li>
                </Link>
                <Link to='/discounts' className={url === '/discounts' ? 'active' : ''}>
                    <li className='px-lg-4'>
                        <FiPercent/>
                        Discounts
                    </li>
                </Link>
            </ul>
        </Col>
    );
}

export default LeftNavigation;
