import React from 'react';

import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';

function App() {

  return (
    <div className="app">
      <Header />
      <AvailableProducts />
      <Footer />
    </div>
  );
}

export default App;
