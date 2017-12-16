import * as types from '../actions/types'

export function newDeck(payload) {
  return dispatch => {
    dispatch({
      type: types.NEW_DECK,
      payload
    })
  }
}

export function removeDeck(payload) {
  return dispatch => {
    dispatch({
      type: types.REMOVE_DECK,
      payload
    })
  }
}