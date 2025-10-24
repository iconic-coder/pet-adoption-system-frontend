import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import GiveUpPet from './pages/GiveUpPet';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 75%, #00f2fe 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <NavBar />
        <PetDetails/>
        <Form data={data} setData={setData} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/give-up-pet" element={<GiveUpPet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
