import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '../../helpers';

const ProductCheckout = (
  { product: { index, name, price, quantity }, onDelete },
) => {
  const amountPrice = quantity * price;

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { formatPrice(price) }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { formatPrice(amountPrice) }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
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
