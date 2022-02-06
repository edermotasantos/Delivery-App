import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import SellerOrderInfo from '../../components/SellerOrderInfo';
import SellerOrderDetailTable from '../../components/SellerOrderDetailTable';
import HeaderSeller from '../../components/HeaderSeller';
import SalesContext from '../../utils/SalesContext/SalesContext';
import priceFormater from '../../helpers/index';

function SellerOrderPageDetail() {
  const { id } = useParams();
  const { setId, orderById } = useContext(SalesContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setId(id);
    setLoading(false);
  }, [id, setId]);

  if (loading) return <h1>Carregando</h1>;

  if (orderById.id) {
    return (
      <>
        <HeaderSeller />
        <main>
          <h2>Detalhe do Pedido</h2>
          <SellerOrderInfo
            orderId={ orderById.id }
            orderDate={ orderById.saleDate }
            status={ orderById.status }
          />
          <SellerOrderDetailTable products={ orderById.products } />
          <h3 data-testid="seller_order_details__element-order-total-price">
            {priceFormater(orderById.totalPrice)}
          </h3>
        </main>
      </>
    );
  }

  return null;
}

export default SellerOrderPageDetail;
