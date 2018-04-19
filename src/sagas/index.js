import { all } from 'redux-saga/effects';
import fetchAllMovies from './movies';
import fetchMovieDetail from './movieDetail';


export default function* rootSaga() {
  yield all([
    fetchAllMovies(),
    fetchMovieDetail(),
  ]);
}
