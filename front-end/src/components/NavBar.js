import React from 'react';

export default function NavBar() {
  return (
    <div>
      <div
        data-testid="customer_products__element-navbar-link-products"
      >PRODUTOS</div>
      <div
        data-testid="customer_products__element-navbar-link-orders"
      >MEUS PEDIDOS</div>
      <div 
        data-testid="customer_products__element-navbar-user-full-name"
      >Cicrano da Silva</div>
      <div
        data-testid="customer_products__element-navbar-link-logout"
      >Sair</div>
    </div>
  );
}
