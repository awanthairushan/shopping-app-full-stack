import React from 'react';
import './App.scss';
import ECommerceApp from './view/ECommerceApp';
import {Container} from 'react-bootstrap';

function App() {
    return (
        <Container fluid className="p-0 m-0">
            <ECommerceApp/>
        </Container>
    );
}

export default App;
