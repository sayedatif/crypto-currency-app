import { put, call } from 'redux-saga/effects';
import { fetchCryptoList } from '../api';
import dataSource from '../dataSource';

export function* handleFetchCryptoList() {
  const processData = cryptoList => {
    console.log('cryptoList', cryptoList);
    return cryptoList.map(cryp => {
      return {
        name: cryp.name,
        symbol: cryp.symbol,
        price: cryp.quotes.USD.price.toFixed(3),
        slug: cryp.website_slug,
      };
    });
  }

  try {
    yield put({ type: 'SET_CRYPTO_LOADING', data: true });
    const { data, status } = yield call(fetchCryptoList);
    if (status === 200 && data.length > 0) {
      yield put({ type: 'SET_CRYPTO_LIST', data: processData(data) });
    } else {
      yield put({ type: 'SET_CRYPTO_LIST', data: processData(dataSource.data) });
      yield put({ type: 'SET_IS_OFFLINE', data: true });
    }
    yield put({ type: 'SET_CRYPTO_LOADING', data: false });
  } catch (e) {
    console.log('e', e);
  }
}