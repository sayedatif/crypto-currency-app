import { takeEvery, all } from 'redux-saga/effects';
import { handleFetchCryptoList } from './crytpoSaga';

export default function* rootSaga() {
  yield all([
    takeEvery('HANDLE_FETCH_CRYPTO_LIST', handleFetchCryptoList)
  ])
}