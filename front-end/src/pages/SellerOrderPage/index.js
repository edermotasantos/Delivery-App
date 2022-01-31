import React, { useContext } from 'react';
import SellerOrderCard from '../../components/SellerOrderCard';
import SalesContext from '../../utils/SalesContext/SalesContext';

function SellerOrderPage() {
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
            deliveryAddress,
            deliveryNumber,
          } = order;
          return (
            <SellerOrderCard
              key={ id }
              orderNumber={ id }
              orderDate={ saleDate }
              total={ Number(totalPrice) }
              index={ index }
              status={ status }
              deliveryAddress={ deliveryAddress }
              deliveryNumber={ deliveryNumber }
            />
          );
        })}
      </main>
    </>
  );
}

export default SellerOrderPage;
