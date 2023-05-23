import React from 'react';

//import react router dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout/:totalAmount' element={<CheckoutPage />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
