import React from 'react';
import PropTypes from 'prop-types';
import dateFormater from '../../helpers/dateFormater';
import './OrderInfo.css';

function SellerOrderInfo({ orderId, orderDate, status }) {
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
        onClick={ () => {} }
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ () => {} }
        disabled
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
