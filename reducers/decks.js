import * as types from '../actions/types';

const defaultState = {
  completedQuiz: '',
  notificationSet: false,
  myDecks: [
    {
      title: 'Demo Deck',
      cards: [
        { question: '1 + 1 = ?', answer: '2' },
      ]
    },
  ],
}

const decks = (state = defaultState, action) => {
  switch (action.type) {
    case types.NEW_DECK: {
      // creating separate scope with {} so variables can be repeated in each case
      const title = action.payload
      return {
        ...state,
        myDecks: [...state.myDecks, {
          title,
          cards: [],
        }],
      }
    }
    case types.DELETE_DECK: {
      const title = action.payload
      const myDecks = state.myDecks.filter(d => {
        return d.title !== title
      })
      return { ...state, myDecks }
    }
    case types.ADD_CARD: {
      const { title, answer, question } = action.payload
      const newCard = { answer, question }
      const myDecks = state.myDecks.map(d => {
        return d.title === title
          ? { title, cards: [...d.cards, newCard] }
          : d
      })
      return { ...state, myDecks }
    }
    case types.QUIZ_COMPLETED:
      return {
        ...state,
        completedQuiz: action.payload,
        notificationSet: true
      }
    case types.SET_INIT_QUIZ_NOTIFICATION:
      return {
        ...state,
        notificationSet: true
      }
    // for future functionality use
    // case types.DELETE_CARD: {
    //   const { title, question } = action.payload
    //   const myDecks = state.myDecks.map(d => {
    //     return d.title === title
    //       ? { title, cards: d.cards.filter(c => c.question !== question) }
    //       : d
    //   })
    //   return {
    //     ...state,
    //     myDecks
    //   }
    // }
    default:
      return state;
  }
}

export default decks
