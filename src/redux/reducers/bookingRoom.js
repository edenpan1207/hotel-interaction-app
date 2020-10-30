import { BOOKING_ROOM } from '../actions/bookingRoom';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BOOKING_ROOM:
      return {
        ...state,
        detail: action.payload
      }
    default:
      return state
  }
}

export default reducer;