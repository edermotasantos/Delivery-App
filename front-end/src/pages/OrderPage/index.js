import React, { useContext } from 'react';
import OrderCard from '../../components/OrderCard';
import SalesContext from '../../utils/SalesContext/SalesContext';

function OrderPage() {
  const { orders } = useContext(SalesContext);

  return (
    <>
      <header>usar componente pronto</header>
      <main>
        {orders.map((order, index) => {
          const {
            id,
            totalPrice,
            saleDate,
            status,
          } = order;
          return (
            <OrderCard
              key={ id }
              orderNumber={ id }
              orderDate={ saleDate }
              total={ Number(totalPrice) }
              index={ index }
              status={ status }
            />
          );
        })}
      </main>
    </>
  );
}

export default OrderPage;
