import React, { useContext } from 'react';
import ProductCheckout from '../ProductCheckout';
import ProductsContext from '../../utils/ProductsContext/ProductsContext';
import formatPrice from '../../helpers';

const FinishOrder = () => {
  const { cart, totalPrice, setCart } = useContext(ProductsContext);

  const onDelete = (productName) => {
    setCart(
      cart.filter((product) => product.name !== productName),
    );
  };

  return (
    <section className="finish-order">
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index) => (
              <ProductCheckout
                product={ { ...product, index } }
                onDelete={ onDelete }
                key={ product.id }
              />
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={ 2 }
              data-testid="customer_checkout__element-order-total-price"
            >
              { formatPrice(totalPrice) }
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default FinishOrder;
