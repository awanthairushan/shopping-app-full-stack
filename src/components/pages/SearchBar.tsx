import React from 'react';
import {Search} from "react-feather";
import {Col, Form, InputGroup} from "react-bootstrap";

const SearchBar: React.FC = () => {
  return (
      <Col  xs={12} md={{span:6 , offset:3 }}>

        <Form>
          <Form.Group className="mb-3 search-bar" >
                <InputGroup >
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="search-box"
                  />
                    <InputGroup.Text className="search-icon">
                      <Search />
                    </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>






      </Col>
  )

}

export default SearchBar;