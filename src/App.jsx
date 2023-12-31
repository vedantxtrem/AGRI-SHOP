import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';

import ShopHeader from './shop/ShopHeader';
import ShopNav from './shop/ShopNav';
import Shopbox from './shop/Shopbox';
import ProductCarousel from './shop/ProductCarousel';
import Category from './shop/Category';
import PromoSection from './shop/PromoSection';
import ProductCard from './shop/ProductCard';
import ShopFooter from './shop/ShopFooter';
import ShopAbout from './shop/ShopAbout';
import Cart from './shop/Cart';
import Wishlist from './shop/Wishlist';
import Contact from './shop/Contact';
import Account from './shop/Account'
import Productoverview from './shop/Product-overview'
import CropRecommendationForm from './shop/CropR';
import PestPrediction from './shop/PestPrediction';
import PaymentForm from './shop/Paymentfrom';
import AddressForm from './shop/AddressFrom';
import OrderConfirmation from './shop/OrderConfirmation';
import DeliveryOptions from './shop/DeliveryOptions';
import Search from './shop/Search';
import Weather from './Weather';
import Navbar from './Navbar';
import Chat from './Chat';
import Body from './Body';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Routes>
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Routes>
          <Route path='/Account' element={<Account/>} />
        </Routes>

        <Routes>
          <Route path='/Productoverview' element={<Productoverview/>} />
        </Routes>

        <Routes>
          <Route path='/Croprecomendation' element={<CropRecommendationForm/>} />
        </Routes>

        <Routes>
          <Route path='/Pestprediction' element={<PestPrediction/>} />
        </Routes>

        <Routes>
          <Route path='/Address' element={<AddressForm/>} />
        </Routes>

        <Routes>
          <Route path='/Payment' element={<PaymentForm/>} />
        </Routes>
        <Routes>
          <Route path='/Weather' element={<Weather/>} />
        </Routes>

        <Routes>
          <Route path='/OrderConfirmation' element={<OrderConfirmation/>} />
        </Routes>
        <Routes>
          <Route path='/DeliveryOptions' element={<DeliveryOptions/>} />
        </Routes>
        <Routes>
          <Route path='/Search' element={<Search/>} />
        </Routes>
        <Routes>
          <Route path='/Chat' element={<Chat/>} />
        </Routes>
        
        <Routes>
          <Route path='/' element={<Body/>} />
        </Routes>
        
        <ShopFooter /> 
        
      </Router>



    </>
  );
}

export default App;