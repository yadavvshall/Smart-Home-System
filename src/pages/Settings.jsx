// pages/Settings.js
import React from 'react';
import AutomationRules from '../components/AutomationRules';

const Settings = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <AutomationRules />
    </div>
  );
};

export default Settings;
