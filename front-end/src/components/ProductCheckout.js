import React from 'react';
import PropTypes from 'prop-types';

const ProductCheckout = (
  { product: { index, name, price, quantity }, onDelete },
) => {
  const amountPrice = quantity * price;

  return (
    <tr>
      <td
        data-testid="customer_checkout__element-order-table-item-number-"
      >
        { index }
      </td>
      <td
        data-testid="customer_checkout__element-order-table-name-"
      >
        { name }
      </td>
      <td
        data-testid="customer_checkout__element-order-table-quantity-"
      >
        { quantity }
      </td>
      <td
        data-testid="customer_checkout__element-order-table-unit-price-"
      >
        { (Math.round(price * 100) / 100).toFixed(2) }
      </td>
      <td
        data-testid="customer_checkout__element-order-table-sub-total-"
      >
        { (Math.round(amountPrice * 100) / 100).toFixed(2) }
      </td>
      <td
        data-testid="customer_checkout__element-order-table-remove-"
      >
        <button type="button" onClick={ () => onDelete(name) }>Remover</button>
      </td>
    </tr>
  );
};

ProductCheckout.propTypes = {
  product: PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductCheckout;
