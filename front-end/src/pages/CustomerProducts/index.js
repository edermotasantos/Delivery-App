import React from 'react';
import Cart from '../../components/Cart';
import Header from '../../components/Header';
import ProductsCards from '../../components/ProductsCards';

export default function CustomerProducts() {
  return (
    <>
      <Header />
      <ProductsCards />
      <Cart />
    </>
  );
}
