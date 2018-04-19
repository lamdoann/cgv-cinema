import { put, call, takeLatest } from 'redux-saga/effects';
import { MOVIES_REQUEST } from '../actionTypes/movies';
import { onSuccess, onError } from '../actions/movies';
import { fetchAll } from '../api/movie';

function* fetchMovies() {
  try {
    const data = yield call(fetchAll);
    yield put(onSuccess(data));
  } catch (error) {
    yield put(onError(error.message))
  }
}

function* watchFetchingMovies() {
  yield takeLatest(MOVIES_REQUEST, fetchMovies);  
}

export default watchFetchingMovies;
