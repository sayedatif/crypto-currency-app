import axios from 'axios';

const BASE_URL = `https://api.coinmarketcap.com/v2`;

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json'
  }
})

export default request;

