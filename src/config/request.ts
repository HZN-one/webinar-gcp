import axios from 'axios';

const request = axios.create({
  timeout: 15000,
  baseURL: 'https://',
  headers: {},
});

export default request;
