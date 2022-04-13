import React from 'react';
import {Search} from "react-feather";
import {Col, Form, InputGroup} from "react-bootstrap";

const SearchBar: React.FC = () => {
  return (
      <Col  xs={12} >

        <Form>
          <Form.Group className=" search-bar mx-auto d-flex align-items-end" >
                <InputGroup >
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="search-box"
                  />
                    <InputGroup.Text className="search-icon">
                      <Search className='search-feather-icon'/>
                    </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>






      </Col>
  )

}

export default SearchBar;