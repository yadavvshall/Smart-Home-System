

import axios from 'axios';

// Retrieve the access token from an environment variable
// eslint-disable-next-line no-undef
const YOUR_ACCESS_TOKEN = process.env.REACT_APP_SMARTTHINGS_ACCESS_TOKEN;

const getSmartThingsDevices = async () => {
  try {
    const response = await axios.get('https://api.smartthings.com/v1/devices', {
      headers: {
        'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching SmartThings devices:', error);
    throw error;
  }
};

export default getSmartThingsDevices;
