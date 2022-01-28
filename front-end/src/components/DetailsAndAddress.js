import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import storeContext from 'storeContext';
// import sellersContext from 'sellersContext';
const ENDPOINT_SALES = 'http://localhost:3001/sales';

const DetailsAndAddress = () => {
  // const { totalPrice, sellers, token, products } = useContext(storeContext);
  const navigate = useNavigate();

  const totalPrice = 31.56; // mock
  const token = 'empty'; // mock
  const sellers = [
    {
      id: 2,
      name: 'Fulana Pereira',
    },
    {
      id: 3,
      name: 'Fulana Pereira2',
    },
  ]; // mock

  const products = [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.20,
      quantity: 3,
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: 7.50,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      quantity: 4,
    },
  ]; // mock

  const [addressDetails, setAddressDetails] = useState({
    sellerId: sellers[0].id,
    address: '',
    addressNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressDetails({ ...addressDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sale = {
      sellerId: parseInt(addressDetails.sellerId, 10),
      deliveryAddress: addressDetails.address,
      deliveryNumber: addressDetails.addressNumber,
      totalPrice,
      products,
    };

    const { data } = await axios.post(
      ENDPOINT_SALES,
      sale,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    const { id } = data;
    navigate(`/customer/orders/${id}`);
  };

  return (
    <section className="details-and-address">
      <h2>Detalhes e Endereço para Entrega</h2>

      <form onSubmit={ handleSubmit }>
        <label htmlFor="seller">
          <span>P. Vendendora Responsavel:</span>
          <select
            id="seller"
            name="sellerId"
            onChange={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            {
              sellers.map(({ name, id }, index) => (
                <option value={ id } key={ index }>{ name }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="address">
          <span>Endereço</span>
          <input
            type="text"
            id="address"
            name="address"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="addressNumber">
          <span>Número</span>
          <input
            type="text"
            id="addressNumber"
            name="addressNumber"
            onChange={ handleChange }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <button type="submit">Finalizar Pedido</button>
      </form>
    </section>
  );
};

export default DetailsAndAddress;
