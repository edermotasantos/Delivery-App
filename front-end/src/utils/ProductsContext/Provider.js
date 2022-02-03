import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import axios from 'axios';
import ContextProducts from './ProductsContext';

export default function UserProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsQuantity, setProductsQuantity] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/products');
      setProducts(data);
      setProductsQuantity(data.map((product) => ({ ...product, quantity: 0 })));
    } catch (e) {
      console.error(e.message);
      return null;
    }
  };

  const fetchSellers = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/users/sellers');
      setSellers(data);
    } catch (e) {
      console.error(e.message);
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchSellers();
    setTotalPrice(0);
  }, []);

  const updateCart = (id, quantity) => {
    setProductsQuantity(productsQuantity.map((item) => {
      if (id === item.id) {
        item.quantity = quantity;
        return item;
      }
      return item;
    }));
  };

  useEffect(() => {
    setCart(
      productsQuantity.filter((product) => (product.quantity !== 0)),
    );
  }, [productsQuantity]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => (
      acc + (item.quantity * Number(item.price))
    ), 0);

    setTotalPrice(total);
  }, [cart]);

  const context = {
    products,
    updateCart,
    cart,
    totalPrice,
    setTotalPrice,
    setCart,
    sellers,
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
