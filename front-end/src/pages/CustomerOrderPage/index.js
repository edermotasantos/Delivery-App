import React, { useContext } from 'react';
import CustomerOrderCard from '../../components/CustomerOrderCard';
import Header from '../../components/Header';
import SalesContext from '../../utils/SalesContext/SalesContext';

function CustomerOrderPage() {
  const { orders } = useContext(SalesContext);

  return (
    <>
      <Header />
      <main>
        {orders.map((order) => {
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
              status={ status }
            />
          );
        })}
      </main>
    </>
  );
}

export default CustomerOrderPage;
