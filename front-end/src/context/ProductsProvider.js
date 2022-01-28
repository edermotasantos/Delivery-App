import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import ContextProducts from './ContextProducts';
import { fetchProducts } from '../components/fetch';

export default function UserProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const getProducts = (await fetchProducts('token')) || [];
      const newProducts = getProducts.map((product) => ({ ...product, count: 0 }));
      setProducts(newProducts);
    })();
  }, []);

  const context = {
    products,
  };

  return (
    <ContextProducts.Provider value={ context }>
      {children}
    </ContextProducts.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isRequired;
