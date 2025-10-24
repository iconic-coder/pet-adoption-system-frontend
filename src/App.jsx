import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import GiveUpPet from './pages/GiveUpPet';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 75%, #00f2fe 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/give-up-pet" element={<GiveUpPet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
