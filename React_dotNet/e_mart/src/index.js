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
import { Cart } from './Components/Cart';
import { AddCart } from './Components/AddCart';
import { RegisterPage } from './Components/RegisterPage';
import { Login } from './Login';

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
