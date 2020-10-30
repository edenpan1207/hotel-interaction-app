import { combineReducers } from 'redux';
import fetchRoom from './fetchRoom';
import bookingRoom from './bookingRoom';
import setDate from './setDate';
import bookingModal from './bookingModal';

const rootReducer = combineReducers({
  fetchRoom,
  bookingRoom,
  setDate,
  bookingModal
})

export default rootReducer;