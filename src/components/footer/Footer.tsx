import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import {Facebook, Twitter, Linkedin, Instagram, Wifi, Youtube} from 'react-feather';

const Footer = () => {
    return (
        <Row className="footer">
            <Col xs={12} className="px-0 mx-sm-auto">
                <Table className="w-xl-50 mx-auto aligh-center d-flex justify-content-center mt-3 mb-0 static-pages-route">
                    <tbody>
                    <tr>
                        <td><p>ABOUT US</p></td>
                        <td><p>FAQ</p></td>
                        <td><p>DELIVERY INFO</p></td>
                        <td><p>CONTACT US</p></td>
                    </tr>
                    </tbody>
                </Table>
                <Table className="w-50 mx-auto aligh-center d-flex justify-content-center mt-sm-2 mb-sm-4 social-media-route">
                    <tbody>
                    <tr>
                        <td>
                            <div><Facebook  className="facebook"/></div>
                        </td>
                        <td>
                            <div><Twitter className="twitter"/></div>
                        </td>
                        <td>
                            <div ><Linkedin className="linkedin"/></div>
                        </td>
                        <td>
                            <div><Instagram className="instagram"/></div>
                        </td>
                        <td>
                            <div><Wifi className="wifi"/></div>
                        </td>
                        <td>
                            <div><Youtube className="youtube"/></div>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center copyright-section">Copyright © 2020. All Rights Reserved. <span className="text-light d-none d-sm-block">Powered By SoftVessel</span></div>
                <div className="d-flex justify-content-center text-light d-block d-sm-none copyright-section">Powered By SoftVessel</div>
            </Col>
        </Row>
    )
}

export default Footer;