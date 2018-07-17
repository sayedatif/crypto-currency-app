import { put, call } from 'redux-saga/effects';
import { fetchCryptoList } from '../api';
import dataSource from '../dataSource';

export function* handleFetchCryptoList() {
  try {
    yield put({ type: 'SET_CRYPTO_LOADING', data: true });
    const { data, status } = yield call(fetchCryptoList);
    if (status === 200 && data.length > 0) {
      yield put({ type: 'SET_CRYPTO_LIST', data: data });
    } else {
      yield put({ type: 'SET_CRYPTO_LIST', data: dataSource.data });
      yield put({ type: 'SET_IS_OFFLINE', data: true });
    }
    yield put({ type: 'SET_CRYPTO_LOADING', data: false });
  } catch (e) {
    console.log('e', e);
  }
}