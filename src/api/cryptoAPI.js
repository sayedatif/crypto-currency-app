import request from '../utils/request';

export const fetchCryptoList = () => request.get('/ticker/?limit=10&structure=array')