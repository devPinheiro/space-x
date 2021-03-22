import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/',
  headers: {
    'Content-Type': 'application/json',
    'Current-Build': 'ios-17',
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
    'Content-Language': 'en',
    DeviceId: '7_devel',
  },
});

export default instance;
