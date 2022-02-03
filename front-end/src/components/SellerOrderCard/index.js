import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dateFormater from '../../helpers/dateFormater';
import priceFormater from '../../helpers/index';
import './orderCard.css';

function SellerOrderCard({
  orderNumber,
  status,
  orderDate,
  total,
  deliveryAddress,
  deliveryNumber,
}) {
  return (
    <Link className="order-card" to={ `/seller/orders/${orderNumber}` }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${orderNumber}` }>
          {orderNumber}
        </p>
      </div>
      <div>
        <h3 data-testid={ `seller_orders__element-delivery-status-${orderNumber}` }>
          {status}
        </h3>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-order-date-${orderNumber}` }>
          { dateFormater(orderDate) }
        </p>
        <p data-testid={ `seller_orders__element-card-price-${orderNumber}` }>
          { priceFormater(total) }
        </p>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-card-address-${orderNumber}` }>
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
  deliveryNumber: PropTypes.string.isRequired,
};

export default SellerOrderCard;
