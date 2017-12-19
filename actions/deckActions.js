import * as types from '../actions/types'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'
import { getToday } from '../utils/helpers'

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


export function quizCompleted() {
  // set notification for tomorrow
  clearLocalNotification()
  setLocalNotification()
  return dispatch => {
    dispatch({
      type: types.QUIZ_COMPLETED,
      payload: getToday()
    })
  }
}

export function setInitQuizNotification() {
  // set initial notification
  setLocalNotification()
  return dispatch => {
    dispatch({
      type: types.SET_INIT_QUIZ_NOTIFICATION,
    })
  }
}