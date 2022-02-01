import React from 'react';
import NavBar from '../components/NavBar';

export default function CustomerCheckout() {
  const { totalPrice } = useContext(ProductsContext);

  return (
    <>
      <NavBar />
      <h1>Finalizar Pedido</h1>
      <h1 data-testid="customer_checkout__element-order-total-price">
        Total: R$
        { totalPrice }
      </h1>
    </>
  );
}
