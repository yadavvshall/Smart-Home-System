
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold">Smart Home</h1>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/settings" className="text-white hover:text-gray-300">Settings</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
