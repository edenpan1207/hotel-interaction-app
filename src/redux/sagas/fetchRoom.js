import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import { roomsConfig } from '../../config/utils';
import {
  fetchStart,
  fetchSuccess,
  fetchfail,
  fetchTarget
} from "../actions/fetchRoom";

function getRoomsApi () {
  return axios.get(roomsConfig.url).then(data => data.data);
}

function* roomsHandler() {
  yield put(fetchStart())
  try {
    const fetchData = yield call(getRoomsApi);
    const dataNormalize = fetchData.reduce((acc, val) => {
      acc[val.id] = val;
      return acc
    }, {})
    
    yield put(fetchSuccess(dataNormalize));

  } catch(error) {
    yield fetchfail(error)
  }
}

export function* getRooms() {
  while(true) {
    yield take(fetchTarget().type);
    yield call(roomsHandler)
  }
}