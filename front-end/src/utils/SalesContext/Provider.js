import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SalesContext from './SalesContext';

function Provider({ children }) {
  const [orders, setOrders] = useState([]);
  const contextValue = {
    orders,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      console.log(response.data);
      setOrders(response.data);
    };
    try {
      fetchOrders();
    } catch (e) {
      console.log(e);
    }
  }, []);

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
