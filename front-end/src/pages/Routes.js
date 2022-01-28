import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Login from './Login';
import CustomerCheckout from './CustomerCheckout';
import Register from './Register';
import OrderPage from './OrderPage';
import OrderPageDetail from './OrderPageDetail';
import CustomerProducts from './CustomerProducts';

export default function Rout() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/orders" element={ <OrderPage /> } />
      <Route path="/customer/orders/:id" element={ <OrderPageDetail /> } />
    </Routes>
  );
}
