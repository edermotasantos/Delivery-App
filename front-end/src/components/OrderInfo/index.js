import React from 'react';
import PropTypes from 'prop-types';
import './OrderInfo.css';

const statusId = 'customer_order_details__element-order-details-label-delivery-status';

function OrderInfo({ orderId, seller, orderDate, status }) {
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
        {orderDate}
      </p>
      <p
        data-testid={ statusId }
      >
        { status }
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        onClick={ () => {} }
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
