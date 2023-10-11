import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Promos from './pages/Promos';
import Menu from './pages/Menu';
import CustomizePizza from './pages/CostomizePizza';
import ContactUs from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/menu/:id" element={<CustomizePizza />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shopping_cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
