import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Recycling from './pages/Recycling';
import EnergyTips from './pages/EnergyTips';
import Gardening from './pages/Gardening';
import ProductSwap from './pages/ProductSwap';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycling" element={<Recycling />} />
            <Route path="/energy-tips" element={<EnergyTips />} />
            <Route path="/gardening" element={<Gardening />} />
            <Route path="/swap" element={<ProductSwap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;