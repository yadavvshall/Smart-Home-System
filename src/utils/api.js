// src/utils/api.js
import axios from 'axios';

const REACT_APP_SMARTTHINGS_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_SMARTTHINGS_ACCESS_TOKEN;

const updateDeviceStatusAPI = async (deviceId, newStatus) => {
  try {
    const response = await axios.put(
      `https://api.smartthings.com/v1/devices/${deviceId}`,
      { status: newStatus },
      {
        headers: {
          'Authorization': `Bearer ${REACT_APP_SMARTTHINGS_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error updating device status:', error);
    throw error;
  }
};

export { updateDeviceStatusAPI };
