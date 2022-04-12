import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import PromotionImage from './../../assets/images/PromotionImage.jpg';
import PromotionBanner from './PromotionBanner'

type PromotionSectionProps = {
    setProductSectionVisible: (isProductSectionVisible : Boolean) => void;
}

const PromotionSection:React.FC<PromotionSectionProps> = (props) => {
    return (
        <Row className="promotionSection">
            <Col xs={12} className='px-0'>
                <Image src={PromotionImage} className="img-fluid"/>
                {/*<PromotionBanner setProductSectionVisible={props.setProductSectionVisible}/>*/}
            </Col>
        </Row>
    );
}

export default PromotionSection;