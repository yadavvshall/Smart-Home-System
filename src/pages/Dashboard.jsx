// pages/Dashboard.js
import React from 'react';
import DeviceList from '../components/DeviceList';
import AutomationRules from '../components/AutomationRules';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <DeviceList />
      <AutomationRules />
    </div>
  );
};

export default Dashboard;
