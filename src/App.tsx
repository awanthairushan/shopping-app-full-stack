import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ECommerceApp from './view/ECommerceApp';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/staticpages/AboutUs";
import ContactUs from "./components/pages/staticpages/ContactUs";
import FAQ from "./components/pages/staticpages/FAQ";
import { ICart } from './components/types/ShoppingTypes';
import { useToasts } from 'react-toast-notifications';
import CheckOut from "./components/pages/CheckOut";

const App = () => {
    const { addToast } = useToasts();
    const CartList: ICart[] = [];
    const [cartItems, setCartItems] = useState<ICart[]>(CartList);

    const handleOnCartItemCreate = (newItem: ICart) => {
        const allItems: ICart[] = cartItems.slice();
        var num=0;
        for(var i=0; i<allItems.length;i++){
            if(allItems[i].name === newItem.name){
                allItems.splice(i, 1, newItem);
                setCartItems(allItems);
                num=1;
                return;
            } else {
                num=0;
            }
        }
        if(num==0){
        allItems.push(newItem);
        setCartItems(allItems);
        }
        addToast("Item Add To Cart", { appearance: 'success', autoDismiss: true });
      };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ECommerceApp cartItems={cartItems}/>}>
                    <Route path='/' element={<Home onCartItemCreate={handleOnCartItemCreate}/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/contact' element={<ContactUs/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    //test
                    <Route path='/checkout' element={<CheckOut/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
