import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Login from './Login';
import CustomerCheckout from './CustomerCheckout';
import Register from './Register';
import CustomerOrderPage from './CustomerOrderPage';
import CustomerOrderPageDetail from './CustomerOrderPageDetail';
import SellerOrderPage from './SellerOrderPage';

export default function Rout() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="/customer/orders" element={ <CustomerOrderPage /> } />
      <Route path="/customer/orders/:id" element={ <CustomerOrderPageDetail /> } />
      <Route path="/seller/orders" element={ <SellerOrderPage /> } />
    </Routes>
  );
}
