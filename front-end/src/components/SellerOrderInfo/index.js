import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import dateFormater from '../../helpers/dateFormater';
import { updateOrderStatus } from '../../services/endpointAPI';
import SalesContext from '../../utils/SalesContext/SalesContext';
import './OrderInfo.css';

function SellerOrderInfo({ orderId, orderDate, status }) {
  const [preparingDisabled, setPreparingDisabled] = useState(true);
  const [dispatchDisabled, setDispatchDisabled] = useState(true);
  const { socket } = useContext(SalesContext);

  useEffect(() => {
    if (status === 'Pendente') {
      setPreparingDisabled(false);
    } else {
      setPreparingDisabled(true);
    }

    if (status === 'Preparando') {
      setDispatchDisabled(false);
    } else {
      setDispatchDisabled(true);
    }
  }, [status]);

  const updateStatus = (newStatus) => {
    updateOrderStatus(newStatus, orderId);
    socket.emit('updateStatus', { status: newStatus });
  };

  return (
    <div className="geral-info-container">
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {`Pedido ${orderId}`}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { dateFormater(orderDate) }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        onClick={ () => updateStatus('Preparando') }
        disabled={ preparingDisabled }
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ () => updateStatus('Em Trânsito') }
        disabled={ dispatchDisabled }
      >
        Saiu para Entrega
      </button>
    </div>
  );
}

SellerOrderInfo.propTypes = {
  orderId: PropTypes.number.isRequired,
  orderDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SellerOrderInfo;
