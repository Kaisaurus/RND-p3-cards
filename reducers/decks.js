import * as types from '../actions/types';

const defaultState = {
  myDecks: [],
}

const decks = (state = defaultState, action) => {
  switch (action.type) {
    case types.SAVE_DECK_TITLE:
      const title = action.payload
      return {
        ...state,
        myDecks: [...state.myDecks, {
          title,
          // cards: state.myDecks.find(deck => deck.title === title).cards || [],
        }],
      }
    // case types.REMOVE_DECK:
    //   const { title } = action.payload
    //   return {
    //     ...state,
    //     myDecks: state.decks.myDecks.filter(deck => deck.title !== title),
    //   }
    // case types.SAVE_CARD:
    //   state.myDecks[action.payload.title]
    //   return {
    //     ...state,
    //     myDecks: [...state.decks.myDecks, action.payload.deck],
    //   }
    default:
      return state;
  }
}

export default decks
