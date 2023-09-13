import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Promos from './pages/Promos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/promos" element={<Promos />} />
      </Routes>
    </Router>
  );
};

export default App;
