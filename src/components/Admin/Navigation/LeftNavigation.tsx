import React, {FC} from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const LeftNavigation: FC = () => {
    return (
        <Col lg={2} className='left-navigation'>
            <div>Logo</div>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/customers'>Customers</Link>
                </li>
                <li>
                    <Link to='/orders'>Orders</Link>
                </li>
                <li>
                    <Link to='/discounts'>Discounts</Link>
                </li>
            </ul>
        </Col>
    );
}

export default LeftNavigation;
