import React, {FC} from "react";
import {Col, Row, Image} from "react-bootstrap";
import AppleImage from "../../../assets/images/prodcuts/Apple.jpg"
import {Edit2, Eye, Trash2} from "react-feather";

type ProductsListItem = {}



const ProductsListItem: FC<ProductsListItem> = (product) => {

  let temp_products = [
    {"image":AppleImage,"name":"product1", "desc1": "description1", "desc2":"descriptio1_2", "category":10, "price":100, "qty":10 ,
      "inventory": "In-Stock"},
    {"image":AppleImage,"name":"product2", "desc1": "description2", "desc2":"descriptio2_2", "category":20, "price":200, "qty":20 ,
      "inventory": "In-Stock"},
    {"image":AppleImage,"name":"product3", "desc1": "description3", "desc2":"descriptio3", "category":30, "price":300, "qty":30 ,
      "inventory": "In-Stock"},
  ];

  const listItems = temp_products.map((product) =>
    <li>{product.inventory}</li>
  );

  return (

    <tr>
      <td className="align-middle">
        <Row>
          <Col xs={2}>
            <Image src={temp_products[0].image} className="card-img"/>
          </Col>
          <Col xs={10}>
            <Row>
              <Col xs={12}>{temp_products[0].desc1}</Col>
              <Col xs={12}>{temp_products[0].desc2}</Col>
            </Row>
          </Col>
        </Row>
      </td>
      <td className="align-middle">
        {temp_products[0].category}
      </td>
      <td className="align-middle">
        {temp_products[0].price}
      </td>
      <td className="align-middle">
        {temp_products[0].qty}
      </td>
      <td className="align-middle">
        {temp_products[0].inventory}
      </td>
      <td className="align-middle">
        <Row>
          <Col className="text-center">
            <Eye className="btn-eye"/>
          </Col>
          <Col className="text-center">
            <Edit2 className="btn-edit"/>
          </Col>
          <Col>
            <Trash2 className="float-start  btn-trash2" />
          </Col>
        </Row>
      </td>
    </tr>
  );
}

export default ProductsListItem;

