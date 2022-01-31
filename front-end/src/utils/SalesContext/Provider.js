import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SalesContext from './SalesContext';

function Provider({ children }) {
  const [orders, setOrders] = useState([]);
  const [orderById, setOrderById] = useState({});
  const [id, setId] = useState(0);
  const contextValue = {
    orders,
    setId,
    orderById,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      setOrders(response.data);
    };
    try {
      fetchOrders();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const fetchOrderById = async (orderId) => {
      const response = await axios.get(`http://localhost:3001/sales/${orderId}`);
      setOrderById(response.data);
    };
    try {
      if (!id) return null;
      fetchOrderById(id);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  return (
    <SalesContext.Provider value={ contextValue }>
      {children}
    </SalesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
