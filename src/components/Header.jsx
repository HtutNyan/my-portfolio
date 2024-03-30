import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-transparent text-white py-4 flex flex-col lg:flex-row justify-between items-center">
      {/* Left section with logo and navigation links */}
      <div className="flex items-center">
        {/* Logo */}
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1.png" alt="Logo" className="h-10 w-14 mr-2" />
        {/* Navigation links */}
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300" style={{ paddingLeft: '20px' }}>Home</Link>
          <Link to="/about" className="hover:text-gray-300" style={{ paddingLeft: '20px' }}>About</Link>
          <Link to="/services" className="hover:text-gray-300" style={{ paddingLeft: '20px' }}>Services</Link>
          <Link to="/life" className="hover:text-gray-300" style={{ paddingLeft: '20px' }}>Life</Link>
        </nav>
      </div>
      {/* Right section with "Contact Us" button */}
      <div className="mt-4 lg:mt-0">
        <Link to="/contact">
          <button className="relative overflow-hidden text-white font-bold py-2 px-4 mr-4 lg:mr-9 rounded-tr-lg rounded-bl-lg text-sm inline-block lg:w-28 h-11" style={{ background: 'linear-gradient(to right, #9291B5, #E7B7B3, #CE8DC2)', textShadow: '0 0 2px #000, 0 0 2px #000', border: '3px double #000' }}>
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
