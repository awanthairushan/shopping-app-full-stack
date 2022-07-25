import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ECommerceApp from './view/ECommerceApp';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/staticpages/AboutUs";
import ContactUs from "./components/pages/staticpages/ContactUs";
import FAQ from "./components/pages/staticpages/FAQ";
import {ICart} from './Types/ShoppingTypes';
import {useToasts} from 'react-toast-notifications';
import CheckOut from "./components/pages/CheckOut";
import Pricing from "./components/pages/staticpages/Pricing";
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ForgotPassWord from "./components/pages/staticpages/ForgotPassWord";
import Customers from "./components/Admin/Customers/Customers";
import AdminApp from "./view/AdminApp";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Products from "./components/Admin/Products/Products";
import Orders from "./components/Admin/Orders/Orders";

const App = () => {
    const {addToast} = useToasts();
    const CartList: ICart[] = [];
    const [cartItems, setCartItems] = useState<ICart[]>(CartList);

    const handleOnCartItemCreate = (newItem: ICart) => {
        const allItems: ICart[] = cartItems.slice();
        let num = 0;
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].name === newItem.name) {
                allItems.splice(i, 1, newItem);
                setCartItems(allItems);
                num = 1;
                return;
            } else {
                num = 0;
            }
        }
        if (num === 0) {
            allItems.push(newItem);
            setCartItems(allItems);
        }
        addToast("Item Add To Cart", {appearance: 'success', autoDismiss: true});
    };

    const handleOnCartItemRemove = (index: number) => {
        const allItems: ICart[] = cartItems.slice();
        allItems.splice(index, 1);
        setCartItems(allItems);
        addToast("Item Deleted", {appearance: 'success', autoDismiss: true});
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ECommerceApp cartItems={cartItems}
                                                       onCartItemRemove={handleOnCartItemRemove}/>}>
                    <Route path='/' element={<Home onCartItemCreate={handleOnCartItemCreate}/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/contact' element={<ContactUs/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/pricing' element={<Pricing/>}/>
                    <Route path='/checkout' element={<CheckOut cartItems={cartItems} setCartItems={setCartItems}/>}/>
                    <Route path='/loginpage' element={<LoginPage/>}/>
                    <Route path='/signuppage' element={<SignupPage/>}/>
                    <Route path='/forgotpassword' element={<ForgotPassWord/>}/>
                </Route>
                <Route path='/' element={<AdminApp/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='products' element={<Products/>}/>
                    <Route path='customers' element={<Customers/>}/>
                    <Route path='orders' element={<Orders/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
