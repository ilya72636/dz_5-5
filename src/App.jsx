import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;
