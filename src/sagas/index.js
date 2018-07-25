import { takeEvery, all } from 'redux-saga/effects';
import { handleFetchCryptoList, handleFetchHistoryList } from './crytpoSaga';

export default function* rootSaga() {
  yield all([
    takeEvery('HANDLE_FETCH_CRYPTO_LIST', handleFetchCryptoList),
    takeEvery('HANDLE_FETCH_HISTORY_LIST', handleFetchHistoryList),
  ])
}