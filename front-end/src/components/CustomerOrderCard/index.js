import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './orderCard.css';

function CustomerOrderCard({ orderNumber, status, orderDate, total, index }) {
  return (
    <Link className="order-card" to={ `/customer/orders/${orderNumber}` }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-id-${index}` }>
          {orderNumber}
        </p>
      </div>
      <div>
        <h3 data-testid={ `customer_orders__element-delivery-status-${index}` }>
          {status}
        </h3>
      </div>
      <div>
        <p data-testid={ `customer_orders__element-order-date-${index}` }>{orderDate}</p>
        <p>
          {`R$ ${total}`}
        </p>
      </div>
    </Link>
  );
}

CustomerOrderCard.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default CustomerOrderCard;
