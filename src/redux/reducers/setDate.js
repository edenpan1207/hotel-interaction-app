import { SET_START_DATE, SET_END_DATE } from '../actions/setDate';

const today = new Date();
const tomorrow = today.setDate(today.getDate() + 1);
const initialState = {
  startDate: today,
  endDate: tomorrow
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload
      }
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload
      }
    default:
      return state;
  }
} 

export default reducer;