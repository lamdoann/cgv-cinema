import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from '../actionTypes/movies';

const initialState = {
  isRequesting: false,
  isError: false,
  isFetched: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case MOVIES_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };

    case MOVIES_SUCCESS:
      return {
        isRequesting: false,
        isFetched: true,
        isError: false,
        data: payload.data,
      };
    
    case MOVIES_ERROR:
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
