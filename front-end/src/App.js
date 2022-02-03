import React from 'react';
import Routes from './pages/Routes';
import Provider from './utils/ProductsContext/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
