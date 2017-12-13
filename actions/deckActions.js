import * as types from '../actions/types'

export function saveDeckTitle(payload) {
  return dispatch => {
    dispatch({
      type: types.SAVE_DECK_TITLE,
      payload: payload
    })
  }
}

export function removeDeck(payload) {
  return dispatch => {
    dispatch({
      type: types.REMOVE_DECK,
      payload: { payload }
    })
  }
}