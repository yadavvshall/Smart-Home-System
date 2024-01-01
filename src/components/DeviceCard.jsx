
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateDeviceStatusAPI } from '../utils/api'; // Import your API utility function

const DeviceCard = ({ device }) => {
  const { id, name, status } = device;
  const [isOn, setIsOn] = useState(status === 'On');

  const handleToggleStatus = async () => {
    try {
      // Simulate sending a request to update the device status
      await updateDeviceStatusAPI(id, !isOn); // Replace with your actual API call

      // If the request is successful, update the local state
      setIsOn(!isOn);
    } catch (error) {
      console.error('Error updating device status:', error);
      // Handle error gracefully, e.g., show a notification to the user
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p>Status: {isOn ? 'On' : 'Off'}</p>
      <button
        className={`bg-${isOn ? 'green' : 'red'}-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-${isOn ? 'green' : 'red'}-600 focus:outline-none focus:ring focus:border-blue-300`}
        onClick={handleToggleStatus}
      >
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

DeviceCard.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeviceCard;
