import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import ContactUs from './pages/ContactUs';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Life from './pages/Life.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#101720' }}>
        <Header />
        <div className="container mx-auto my-8 flex-grow bg-transparent">
          <Routes>
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/life' element={<Life/>} />
            <Route path='/' element={<HomePage/>} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
