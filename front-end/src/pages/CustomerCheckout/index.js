import React from 'react';
import DetailsAndAddress from '../../components/DetailsAndAddress';
import FinishOrder from '../../components/FinishOrder';
// import Header from '../components/Header';

const CustomerCheckout = () => (
  <>
    {/* <Header /> */}
    <main>
      <FinishOrder />
      <DetailsAndAddress />
    </main>
  </>
);

export default CustomerCheckout;
