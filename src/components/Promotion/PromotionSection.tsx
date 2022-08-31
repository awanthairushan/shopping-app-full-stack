import React,{useEffect} from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import PromotionImage from './../../assets/images/PromotionImage.jpg';
import PromotionBanner from './PromotionBanner'
import {useNavigate} from "react-router-dom";

type PromotionSectionProps = {
    setProductSectionVisible: () => void;
}

const PromotionSection:React.FC<PromotionSectionProps> = (props) => {

    const navigate = useNavigate();
    const user = localStorage.getItem('role');

    useEffect(() => {
        console.log(user)
        if(user == null || user == "nouser") {
            navigate('/loginpage');
        }
    }, []);

    return (
        <Row className="promotionSection ">
            <Col xs={12} className='px-0 d-flex align-items-center align-content-center'>
                <Image src={PromotionImage} className="img-fluid promotion-image"/>
                <PromotionBanner setProductSectionVisible={props.setProductSectionVisible}/>
            </Col>
        </Row>
    );
}

export default PromotionSection;
