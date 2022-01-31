import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SalesContext from '../../utils/SalesContext/SalesContext';
import OrderDetailTable from '../../components/OrderDetailTable';
import OrderInfo from '../../components/OrderInfo';

function OrderDetailPage() {
  const { id } = useParams();
  const { setId, orderById } = useContext(SalesContext);

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  if (orderById.id) {
    const {
      id: orderId,
      seller: { name },
      saleDate,
      status,
      products,
    } = orderById;
    return (
      <>
        <header>header vai aqui</header>
        <main>
          <h2>Detalhe do Pedido</h2>
          <OrderInfo
            orderId={ orderId }
            seller={ name }
            orderDate={ saleDate }
            status={ status }
          />
          <OrderDetailTable products={ products } />
        </main>
      </>
    );
  }

  return null;
}

export default OrderDetailPage;
