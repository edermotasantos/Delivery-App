import React, { useContext } from 'react';
import HeaderSeller from '../../components/HeaderSeller';
import SellerOrderCard from '../../components/SellerOrderCard';
import SalesContext from '../../utils/SalesContext/SalesContext';

function SellerOrderPage() {
  const { orders } = useContext(SalesContext);

  return (
    <>
      <HeaderSeller />
      <main>
        {orders.map((order) => {
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
