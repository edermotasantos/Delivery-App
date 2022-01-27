import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Login from './Login';

export default function Rout() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
    </Routes>
  );
}
