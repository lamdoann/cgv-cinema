import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from '../actionTypes/movies';

export const onRequest = () => (
  {
    type: MOVIES_REQUEST,
  }
);

export const onSuccess = (data) => (
  {
    type: MOVIES_SUCCESS,
    data,
  }
);

export const onError = (message) => (
  {
    type: MOVIES_ERROR,
    message,
  }
);
