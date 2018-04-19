import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_ERROR } from '../actionTypes/movieDetail';

const initialState = {
  isRequesting: false,
  isError: false,
  isFetched: false,
};

const reducer = (state = initialState, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case MOVIE_DETAIL_REQUEST:
      return {
        isRequesting: true,
      };

    case MOVIE_DETAIL_SUCCESS:
      return {
        isRequesting: false,
        isFetched: true,
        isError: false,
        data: payload.data,
      };
    
    case MOVIE_DETAIL_ERROR:
      return {
        ...state,
        isRequesting: false,
        isFetched: true,
        isError: true,
        message: payload.message,
      };
    
    default:
      return state;
  }
};

export default reducer;
