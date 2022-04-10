import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ECommerceApp from './view/ECommerceApp';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/staticpages/AboutUs";
import ContactUs from "./components/pages/staticpages/ContactUs";
import FAQ from "./components/pages/staticpages/FAQ";
import CheckOutTableItem from "./components/CheckOut/CheckOutTableItem";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ECommerceApp/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/contact' element={<ContactUs/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    //test
                    <Route path='/checkout' element={<CheckOutTableItem/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
