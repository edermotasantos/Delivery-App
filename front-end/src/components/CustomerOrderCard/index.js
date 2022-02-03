import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dateFormater from '../../helpers/dateFormater';
import './orderCard.css';

function CustomerOrderCard({ orderNumber, status, orderDate, total }) {
  return (
    <Link className="order-card" to={ `/customer/orders/${orderNumber}` }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-id-${orderNumber}` }>
          {orderNumber }
        </p>
      </div>
      <div>
        <h3 data-testid={ `customer_orders__element-delivery-status-${orderNumber}` }>
          {status}
        </h3>
      </div>
      <div>
        <p data-testid={ `customer_orders__element-order-date-${orderNumber}` }>
          {dateFormater(orderDate)}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${orderNumber}` }>
          {`R$ ${(Math.round(total * 100) / 100).toFixed(2)}`}
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
};

export default CustomerOrderCard;
