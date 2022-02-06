import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { updateOrderStatus } from '../../services/endpointAPI';
import dateFormater from '../../helpers/dateFormater';
import SalesContext from '../../utils/SalesContext/SalesContext';
import './OrderInfo.css';

const statusId = 'customer_order_details__element-order-details-label-delivery-status';

function OrderInfo({ orderId, seller, orderDate, status }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { socket } = useContext(SalesContext);

  useEffect(() => {
    if (status === 'Em Trânsito') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [status]);

  const updateStatus = () => {
    updateOrderStatus('Entregue', orderId);
    socket.emit('updateStatus', { status: 'Entregue' });
  };

  return (
    <div className="geral-info-container">
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`Pedido ${orderId}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`Vendedor(a): ${seller}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {dateFormater(orderDate)}
      </p>
      <p
        data-testid={ statusId }
      >
        { status }
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        onClick={ updateStatus }
        disabled={ buttonDisabled }
      >
        Marcar como Entregue
      </button>
    </div>
  );
}

OrderInfo.propTypes = {
  orderId: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderInfo;
