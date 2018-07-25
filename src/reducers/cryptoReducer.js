import {
  SET_CRYPTO_LOADING,
  SET_CRYPTO_LIST,
  SET_IS_OFFLINE,
  SET_HISTORY_LOADING,
  SET_HISTORY_LIST,
  SET_RECEIVE_VISIBLE,
} from '../actions';

const initialState = {
  cryptoList: [],
  cryptoLoading: false,
  isOffline: false,
  historyList: [],
  historyLoading: false,
  receiveVisible: false,
};

const cryptoReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SET_CRYPTO_LOADING:
      return {
        ...state,
        cryptoLoading: data,
      }
    case SET_CRYPTO_LIST:
      return {
        ...state,
        cryptoList: data,
      }
    case SET_IS_OFFLINE:
      return {
        ...state,
        isOffline: data,
      }
    case SET_HISTORY_LOADING:
      return {
        ...state,
        historyLoading: data,
      }
    case SET_HISTORY_LIST:
      return {
        ...state,
        historyList: data,
      }
    case SET_RECEIVE_VISIBLE:
      return {
        ...state,
        receiveVisible: data
      }
    default:
      return state;
  }
};

export default cryptoReducer;