
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        
        <nav className="w-1/6 bg-gray-800 p-4 text-white">
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
            <li><Link to="/settings" className="hover:text-gray-300">Settings</Link></li>
          </ul>
        </nav>

       
        <div className="w-5/6 p-4 bg-gray-100">
          <Header />
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
