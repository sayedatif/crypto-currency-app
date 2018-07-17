import { SET_CRYPTO_LOADING, SET_CRYPTO_LIST, SET_IS_OFFLINE } from '../actions';

const initialState = {
  cryptoList: [],
  cryptoLoading: false,
  isOffline: false,
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
    default:
      return state;
  }
};

export default cryptoReducer;