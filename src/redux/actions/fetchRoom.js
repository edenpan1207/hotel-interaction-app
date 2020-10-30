export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_TARGET = "FETCH_TARGET";

export const fetchStart = () => ({
  type: FETCH_SUCCESS
})

export const fetchSuccess = res => ({
  type: FETCH_SUCCESS,
  payload: res
})

export const fetchfail = error => ({
  type: FETCH_FAIL,
  payload: error
})

export const fetchTarget = () => ({
  type: FETCH_TARGET
})