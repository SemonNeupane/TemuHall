import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './components/Nav.jsx';
// import Products from './components/Products.jsx'
import Hero from './components/hero.jsx';
import Footer from './components/Footer.jsx'
import SignIn from './components/SignIn.jsx';
import { Bag } from './components/products/Bag.jsx';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen pb-16'>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path='/products' element={<Products />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path='/products/bags' element={<Bag />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
