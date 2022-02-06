import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));

  const clearStorage = () => localStorage.removeItem('user');

  return (
    <header>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/seller/orders"
      >
        PEDIDOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/login"
      >
        {user ? user.name : null}
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ clearStorage }
      >
        Sair
      </Link>
    </header>
  );
}
