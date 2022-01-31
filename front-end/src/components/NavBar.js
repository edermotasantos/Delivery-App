import React from 'react';

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const clearStorage = () => localStorage.removeItem('user');

  return (
    <div>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="users/:id"
      >
        {user ? user.name : null}
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ () => clearStorage() }
      >
        Sair
      </Link>
    </div>
  );
}
