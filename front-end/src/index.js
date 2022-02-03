import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import SalesContextProvider from './utils/SalesContext/Provider';
import ProductsContextProvider from './utils/ProductsContext/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SalesContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </SalesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
