import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../utils/ProductsContext/ProductsContext';

export default function Cart() {
  const { totalPrice } = useContext(ProductsContext);
  return (
    <Link
      className="cartbox"
      to="/customer/checkout"
    >
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ totalPrice === 0 }
      >
        Ver Carrinho:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          Total: R$
          { totalPrice }
        </span>
      </button>
    </Link>
  );
}
