import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import SignIn from './components/SignIn.jsx';
import Bag from './components/products/Bag.jsx'; // Removed curly braces for default export
import Makeup from './components/products/Makeup.jsx';
import Shoe from './components/products/Shoe.jsx';
import Perfume from './components/products/Perfume.jsx';
import Cloth from './components/products/Cloth.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen pb-16">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products/bags" element={<Bag />} />
          <Route path='/products/makeup' element={<Makeup />} />
          <Route path='/products/shoe' element={<Shoe />} />
          <Route path='/products/perfume' element={<Perfume />} />
          <Route path='/products/cloth' element={<Cloth />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
  
};

export default App;
