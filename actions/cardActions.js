import * as types from '../actions/types'

export function addCard(payload) {
  return dispatch => {
    dispatch({
      type: types.ADD_CARD,
      payload
    })
  }
}

export function removeCard(payload) {
  return dispatch => {
    dispatch({
      type: types.REMOVE_CARD,
      payload
    })
  }
}

