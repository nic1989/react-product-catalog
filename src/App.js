import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
