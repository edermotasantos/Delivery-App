import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import axios from 'axios';
import ContextProducts from './ProductsContext';

export default function UserProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [count, setcount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);

  const fetchProducts = () => {
    try {
      axios.get('http://localhost:3001/products')
        .then((res) => {
          const { result } = res.data;
          setProducts(result);
        });
    } catch (e) {
      console.error(e.message);
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
    setTotalPrice(0);
  }, []);

  const updateCartTotalPrice = () => {
    let totalPriceValue = 0;
    const cart = shoppingCart;
    cart.map((item) => {
      totalPriceValue += item.count * Number(item.price);
      return totalPriceValue;
    });
    setTotalPrice(totalPriceValue);
  };

  const updateShoppingCart = (e) => {
    const cart = shoppingCart;
    if (cart.length > 0) {
      if (cart.some((item) => item.id === products[e.target.id - 1].id)) {
        cart.map((item, index) => {
          if (item.id === products[e.target.id - 1].id) {
            item.count = products[e.target.id - 1].count;
            if (item.count === 0) {
              cart.splice(index, 1);
            }
          }
          return false;
        });
      } else cart.push(products[e.target.id - 1]);
    } else cart.push(products[e.target.id - 1]);
    setShoppingCart(cart);
    localStorage.setItem('carrinho', JSON.stringify(shoppingCart));
    updateCartTotalPrice();
  };

  const increment = (e) => {
    const { id } = e.target;
    products[id - 1].count += 1;
    updateShoppingCart(e);
    setcount(count + 1);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    products[id - 1].count = Number(value);
    setcount(value);
    updateShoppingCart(e);
  };

  const decrement = (e) => {
    if (products[e.target.id - 1].count > 0) {
      products[e.target.id - 1].count -= 1;
      updateShoppingCart(e);
      setCount(count - 1);
    }
  };

  const context = {
    count,
    products,
    increment,
    decrement,
    handleChange,
    totalPrice,
    setTotalPrice,
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
