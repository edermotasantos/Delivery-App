import React from 'react';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

export default function CustomerProducts() {
  return (
    <>
      <NavBar />
      <ProductCard />
      <Cart />
    </>
  );
}
