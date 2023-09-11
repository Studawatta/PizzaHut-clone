import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
