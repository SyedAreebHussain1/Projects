import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/shop-context";
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <div className="">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
