import React from 'react';

import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import CarProvider from './components/Store/Cart-Provider';

function App() {


  return (
    <CarProvider>
      {/* <Cart></Cart> */}
      <Header />
      <AvailableProducts />
      <Footer />
    </CarProvider>
  );
}

export default App;
