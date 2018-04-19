import { put, call, takeLatest } from 'redux-saga/effects';
import { MOVIE_DETAIL_REQUEST } from '../actionTypes/movieDetail';
import { onSuccess, onError } from '../actions/movieDetail';
import { getDetail } from '../api/movie';

function* getMovieDetail({ id }) {
  try {
    const data = yield call(getDetail, id);
    yield put(onSuccess(data));
  } catch (error) {
    yield put(onError(error.message))
  }
}

function* watchGettingMovieDetail() {
  yield takeLatest(MOVIE_DETAIL_REQUEST, getMovieDetail);  
}

export default watchGettingMovieDetail;
