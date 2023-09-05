import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from './Components/Home';
import { Categories } from './Components/Categories';
import { SubCategories } from './Components/SubCategories';
import { Brands } from './Components/Brands';
import { Product } from './Components/Product';
import Cart from './Components/Cart';
import { AddCart } from './Components/AddCart';
import { RegisterPage } from './Components/RegisterPage';
import { Login } from './Login';
import ContactUs  from './Components/ContactUs';
import ErrorPage from "./Components/ErrorPage";
import Invoice from './Components/Invoice';
import ShowInvoice from './Components/ShowInvoice';
import Profile from './Components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index path="/" element={<Home />} />
          <Route index path="Home" element={<Home />} />
          <Route path="Categoreis" element={<Categories />} />
          <Route path="SubCategories/:subcatid" element={<SubCategories />} />
          <Route path="Brands/:subcatid" element={<Brands />} />
          <Route path="Product/:catmasterid" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="AddCart/:proid" element={<AddCart />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="ShowInvoice" element={<ShowInvoice />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
