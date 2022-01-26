import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import CustomerProducts from './pages/CustomerProducts';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/customer/products"
        element={ CustomerProducts }
      />
    </Routes>
  );
}

export default App;
