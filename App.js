import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import About from './components/Pages/About';
import AvailableProducts from './components/Products/AvailableProducts';
import CarProvider from './components/Store/Cart-Provider';

function App() {


  return (
    <CarProvider>
      {/* <Cart></Cart> */}
      <Header />
      <body>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/store'>
          <AvailableProducts />
        </Route>
      </body>
      <Footer />
    </CarProvider>
  );
}

export default App;
