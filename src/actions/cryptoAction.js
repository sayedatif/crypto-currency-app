// action types
export const HANDLE_FETCH_CRYPTO_LIST = 'HANDLE_FETCH_CRYPTO_LIST';
export const SET_CRYPTO_LOADING = 'SET_CRYPTO_LOADING';
export const SET_CRYPTO_LIST = 'SET_CRYPTO_LIST';
export const SET_IS_OFFLINE = 'SET_IS_OFFLINE';
export const HANDLE_FETCH_HISTORY_LIST = 'HANDLE_FETCH_HISTORY_LIST';
export const SET_HISTORY_LOADING = 'SET_HISTORY_LOADING';
export const SET_HISTORY_LIST = 'SET_HISTORY_LIST';


// action creators
export const handleFetchCryptoList = () => ({ type: HANDLE_FETCH_CRYPTO_LIST });
export const handleFetchHistoryList = () => ({ type: HANDLE_FETCH_HISTORY_LIST });