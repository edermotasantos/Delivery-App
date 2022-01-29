import React, { useContext } from 'react';
import CustomerOrderCard from '../../components/CustomerOrderCard';
import SalesContext from '../../utils/SalesContext/SalesContext';

function CustomerOrderPage() {
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
            <CustomerOrderCard
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

export default CustomerOrderPage;
