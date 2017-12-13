import * as types from '../actions/types'

export function saveCard(payload) {
  return dispatch => {
    dispatch({
      type: types.SAVE_CARD,
      payload: { payload }
    })
  }
}

export function removeCard(payload) {
  return dispatch => {
    dispatch({
      type: types.REMOVE_CARD,
      payload: { payload }
    })
  }
}

