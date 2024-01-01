// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import DeviceList from '../components/DeviceList';

const Home = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Welcome to Smart Home</h1>
      <Link to="/dashboard" className="text-blue-500 underline">Go to Dashboard</Link>
      <DeviceList />
    </div>
  );
};

export default Home;
