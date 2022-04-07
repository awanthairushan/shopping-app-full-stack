import React from 'react';
import {Card,Button} from 'react-bootstrap';

type PromotionBannerProps = {
    setProductSectionVisible: (isProductSectionVisible : Boolean) => void;
}

const PromotionBanner: React.FC<PromotionBannerProps> = (props) => {
    return (
        <Card className="promotion-banner">
            <Card.Body>
                <Card.Subtitle className="text-dark sub-title mb-lg-2 my-md-1">100% Healthy & Affordable</Card.Subtitle>
                <Card.Title className="title">organic vegetables</Card.Title>
                <Card.Subtitle className="text-dark sub-title my-lg-3 my-md-2">Small Chages Big Difference</Card.Subtitle>
                <Button className="bg-light text-dark shop-now-button" onClick={ () => props.setProductSectionVisible(true)}>Shop Now</Button>
            </Card.Body>
        </Card>
    )
}

export default PromotionBanner;