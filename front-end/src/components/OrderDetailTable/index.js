import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailTable({ products }) {
  const generateTableRow = (product, index) => {
    const { name, price, details: { quantity } } = product;

    return (
      <tr key={ name }>
        <td
          data-testid={
            `customer_order_details__element-order-table-item-number-${index}`
          }
        >
          { index }
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-name-${index}` }
        >
          { name }
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
        >
          { quantity }
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
        >
          { (Math.round(price * 100) / 100).toFixed(2) }
        </td>
        <td
          data-testid={ `customer_order_details__element-order-total-price-${index}` }
        >
          { (Math.round(price * quantity * 100) / 100).toFixed(2) }
        </td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(generateTableRow)
        }
      </tbody>
    </table>
  );
}

OrderDetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default OrderDetailTable;
