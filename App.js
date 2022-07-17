import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import AvailableProducts from './components/Products/AvailableProducts';
import AvailableMovie from './components/Products/Movies/AvailableMovies';
import CarProvider from './components/Store/Cart-Provider';
import ContactUs from './components/Pages/ContactUs';

function App() {


  return (
    <CarProvider>
      {/* <Cart></Cart> */}
      <Header />
      <div>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/store'>
          <AvailableProducts />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/contactus'>
          <ContactUs />
        </Route>
        <Route path='/movies'>
          <AvailableMovie />
        </Route>
      </div>
      <Footer />
    </CarProvider>
  );
}

export default App;
