import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  ContactUs,
  CustomizePizza,
  Landing,
  Menu,
  Promos,
  ShoppingCart,
  SignIn,
} from './pages';

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
