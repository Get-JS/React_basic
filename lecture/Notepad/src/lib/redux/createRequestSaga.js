import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCESS = `${type}_SUCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      const { data } = yield call(request, action.payload);
      yield put({
        type: SUCESS,
        payload: data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
