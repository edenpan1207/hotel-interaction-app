import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/fetchRoom';

const initialState = {
  isloading: true,
  results: {},
  errorMessage: undefined
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state, 
        isloading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isloading: false,
        results: action.payload || {},
        errorMessage: undefined
      }
    case FETCH_FAIL:
      return {
        ...state,
        isloading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default reducer;