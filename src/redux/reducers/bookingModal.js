import { SET_STATUS, MODAL_OPEN, MODAL_CLOSE } from '../actions/bookingModal';

const initialState = {
  status: '',
  isOpen: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STATUS: 
      return {
        ...state, 
        status: action.payload
      }
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true
      }
    case MODAL_CLOSE:
      return {
        ...state, 
        isOpen: false
      }
    default:
      return state;
  }
}

export default reducer;