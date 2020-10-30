export const SET_STATUS = 'SET_STATUS';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const setStatus = status => ({
  type: SET_STATUS,
  payload: status
})

export const modalOpen = () => ({
  type: MODAL_OPEN
})

export const modalClose = () => ({
  type: MODAL_CLOSE
})