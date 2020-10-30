import { fork } from 'redux-saga/effects';
import { getRooms } from './fetchRoom';

export default function* rootSaga() {
  yield fork(getRooms)
}