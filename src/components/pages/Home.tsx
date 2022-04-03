import React from 'react';
import Logobar from '../navbars/LogoBar';
import {Row, Col} from 'react-bootstrap';


const Home:React.FC = () => {
  return (
      <Row>
        <Col>
          <Logobar/>
        </Col>
      </Row>
  )
}

export default Home;