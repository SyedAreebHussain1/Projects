import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
