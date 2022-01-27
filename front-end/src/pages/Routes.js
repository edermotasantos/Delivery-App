import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

export default function Rout() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
    </Routes>
  );
}
