import * as types from '../actions/types';

const defaultState = {
  myDecks: [
    {
      title: 'samm',
      cards: [
        { question: 'boo', answer: 'baa' },
      ]
    },
    {
      title: 'samm2',
      cards: [
        { question: 'bii', answer: 'bea' },
      ]
    },
  ],
}

const decks = (state = defaultState, action) => {
  switch (action.type) {
    case types.NEW_DECK: {
      // creating separate scope so variables can be repeated in cases
      const title = action.payload
      return {
        ...state,
        myDecks: [...state.myDecks, {
          title,
          cards: [],
        }],
      }
    }
    case types.ADD_CARD: {
      const { title, answer, question } = action.payload
      const newCard = { answer, question }
      const myDecks = state.myDecks.map(d => {
        return d.title === title
          ? newCard // return deck with additional card in cards
          : d
      })
      console.log(myDecks)
      return {
        ...state,
        // myDecks,
      }
    }
    // case types.REMOVE_DECK:
    //   const { title } = action.payload
    //   return {
    //     ...state,
    //     myDecks: state.decks.myDecks.filter(deck => deck.title !== title),
    //   }
    default:
      return state;
  }
}

export default decks
