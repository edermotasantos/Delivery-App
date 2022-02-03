import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SalesContext from '../../utils/SalesContext/SalesContext';
import OrderDetailTable from '../../components/OrderDetailTable';
import OrderInfo from '../../components/OrderInfo';
import Header from '../../components/Header';
import priceFormater from '../../helpers/index';

function CustomerOrderPageDetail() {
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
      totalPrice,
    } = orderById;
    return (
      <>
        <Header />
        <main>
          <h2>Detalhe do Pedido</h2>
          <OrderInfo
            orderId={ orderId }
            seller={ name }
            orderDate={ saleDate }
            status={ status }
          />
          <OrderDetailTable products={ products } />
          <div data-testid="customer_order_details__element-order-total-price">
            { priceFormater(totalPrice) }
          </div>
        </main>
      </>
    );
  }

  return null;
}

export default CustomerOrderPageDetail;
