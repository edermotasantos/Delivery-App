import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './orderCard.css';

function SellerOrderCard({
  orderNumber,
  status,
  orderDate,
  total,
  index,
  deliveryAddress,
  deliveryNumber,
}) {
  return (
    <Link className="order-card" to={ `/seller/orders/${orderNumber}` }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${index}` }>
          {orderNumber}
        </p>
      </div>
      <div>
        <h3 data-testid={ `seller_orders__element-delivery-status-${index}` }>
          {status}
        </h3>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-order-date-${index}` }>{orderDate}</p>
        <p data-testid={ `seller_orders__element-card-price-${index}` }>
          {`R$ ${total}`}
        </p>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-card-address-${index}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </div>
    </Link>
  );
}

SellerOrderCard.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SellerOrderCard;
