import React from 'react';
import ProductCheckout from '../ProductCheckout';
// import storeContext from 'storeContext';

const FinishOrder = () => {
  // const { products, totalPrice, setProducts } = useContext(storeContext);
  const products = [
    {
      name: 'Skol Lata 250ml',
      price: 2.20,
      quantity: 3,
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      quantity: 2,
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      quantity: 4,
    },
  ]; // mock

  const totalPrice = 31.56; // mock

  const onDelete = (productName) => {
    setProducts(
      products.filter((product) => product.name !== productName),
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
            products.map((product, index) => (
              <ProductCheckout
                product={ { ...product, index } }
                onDelete={ onDelete }
                key={ index }
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
              { `Total: ${totalPrice}` }
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default FinishOrder;
