import React, {useState} from 'react';
import {Col, Row, Card, CardImg} from "react-bootstrap";
import ProductSection from "../pages/ProductSection";

type CategoryListProps = {
  items: {
    id: number
    name: string
    image: string
  }[]
}

const CategoryList: React.FC<CategoryListProps> = (props: CategoryListProps) => {

  const [selectedCategory, setSelectedCategory] = useState<String>("All");

  const handleCategoryChange = (category: String) => {
    setSelectedCategory(category);
    console.log(category);
  }

  const getProductByCategory = () => {
    if(selectedCategory){
      return <ProductSection selectedCategory={selectedCategory}/>
    }
  }
  return (
      <React.Fragment>
      <Row xs={12} className='d-flex flex-row justify-content-center mt-3 mx-0 category'>
        <h2 className='text-center'>Our Products</h2>
        <Col xl={10} lg={12} xs={12} className='d-flex flex-md-row flex-column justify-content-center mb-2'>
          {props.items.map(item => {
            return (
                <Card key={item.id} className='category-item m-xl-4 m-lg-2' onClick={() =>handleCategoryChange(item.name)}>
                  <CardImg src={item.image} alt={item.name}/>
                  <Card.Title className='text-center'>
                    {item.name}
                  </Card.Title>
                </Card>
            );
          })}
        </Col>
      </Row>
        {getProductByCategory()}
      </React.Fragment>
  );
};

export default CategoryList;
