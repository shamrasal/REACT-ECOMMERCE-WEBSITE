import React, { useState } from 'react';

import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import Cart from './components/Cart/Cart';

function App() {


  return (
    <div className="app">
      {/* <Cart></Cart> */}
      <Header />
      <AvailableProducts />
      <Footer />
    </div>
  );
}

export default App;
