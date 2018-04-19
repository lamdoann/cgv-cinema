import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_ERROR } from '../actionTypes/movieDetail';

export const onRequest = (id) => (
  {
    type: MOVIE_DETAIL_REQUEST,
    id,
  }
);

export const onSuccess = (data) => (
  {
    type: MOVIE_DETAIL_SUCCESS,
    data,
  }
);

export const onError = (message) => (
  {
    type: MOVIE_DETAIL_ERROR,
    message,
  }
);
