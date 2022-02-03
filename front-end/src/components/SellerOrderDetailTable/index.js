import React from 'react';
import PropTypes from 'prop-types';
import priceFormater from '../../helpers/index';

function SellerOrderDetailTable({ products }) {
  const generateTableRow = (product, index) => {
    const { name, price, details: { quantity } } = product;

    return (
      <tr key={ name }>
        <td
          data-testid={
            `seller_order_details__element-order-table-item-number-${index}`
          }
        >
          { index + 1 }
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          { name }
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          { quantity }
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          { priceFormater(price) }
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          { priceFormater(price * quantity) }
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

SellerOrderDetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default SellerOrderDetailTable;
