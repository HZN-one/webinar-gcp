import axios from 'axios';
import config from './config';

const { API_BASE_URL, CLIENT_ID, PASS_KEY } = config.gosend;

const request = axios.create({
  timeout: 15000,
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Client-ID': CLIENT_ID,
    'Pass-Key': PASS_KEY,
  },
});

export default request;
