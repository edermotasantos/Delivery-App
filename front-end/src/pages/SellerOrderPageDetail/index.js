import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOrderById } from '../../services/endpointAPI';

import SellerOrderInfo from '../../components/SellerOrderInfo';
import SellerOrderDetailTable from '../../components/SellerOrderDetailTable';
import HeaderSeller from '../../components/HeaderSeller';
import priceFormater from '../../helpers/index';

function SellerOrderPageDetail() {
  const { id } = useParams();

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getOrderInDB = async () => {
      const currentOrder = await getOrderById(id);
      setOrder(currentOrder);

      return setLoading(false);
    };

    getOrderInDB();
  }, [id]);

  if (loading) return <h1>Carregando</h1>;

  return (
    <>
      <HeaderSeller />
      <main>
        <h2>Detalhe do Pedido</h2>
        <SellerOrderInfo
          orderId={ order.id }
          orderDate={ order.saleDate }
          status={ order.status }
        />
        <SellerOrderDetailTable products={ order.products } />
        <h3 data-testid="seller_order_details__element-order-total-price">
          {priceFormater(order.totalPrice)}
        </h3>
      </main>
    </>
  );
}

export default SellerOrderPageDetail;
