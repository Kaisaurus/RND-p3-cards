import * as types from '../actions/types'

export function newDeck(payload) {
  return dispatch => {
    dispatch({
      type: types.NEW_DECK,
      payload
    })
  }
}

export function deleteDeck(payload) {
  return dispatch => {
    dispatch({
      type: types.DELETE_DECK,
      payload
    })
  }
}