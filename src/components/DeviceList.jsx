
import React from 'react';
import DeviceCard from './DeviceCard';

const DeviceList = () => {
  
  const devices = [
    { id: 1, name: 'Light', status: 'On' },
    { id: 2, name: 'Thermostat', status: '22°C' },
    { id: 3, name: 'Camera', status: 'Online' },
    
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Device List</h2>
      {devices.map(device => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
