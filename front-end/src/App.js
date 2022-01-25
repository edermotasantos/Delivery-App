import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import ProductsClient from './pages/ProductsClient';

function App() {
  return (
    <Routes>
      <Route
        exact
        element={ ProductsClient }
      />
    </Routes>
  );
}

export default App;
