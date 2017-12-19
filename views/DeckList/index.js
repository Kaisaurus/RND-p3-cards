import React, { Component } from 'react'
import { View } from 'react-native'
import { List, Content, H3 } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DeckListItem from './DeckListItem'
import { setInitQuizNotification } from '../../actions/deckActions'
import { getToday } from '../../utils/helpers'

class DeckList extends Component {
  static PropTypes = {
    myDecks: PropTypes.array.isRequired
  }
  _onPressDeck(deckTitle) {
    this.props.navigation.navigate('DeckView', { deckTitle: deckTitle })
  }
  _onPressAddCard(deckTitle) {
    this.props.navigation.navigate('AddCardView', { deckTitle: deckTitle })
  }
  _onPressQuiz(deckTitle) {
    this.props.navigation.navigate('QuizView', { deckTitle: deckTitle })
  }
  render() {
    const { myDecks, completedQuiz, notificationSet, setInitQuizNotification } = this.props
    const quizReminder = completedQuiz === getToday()
      ? 'Good job! Completed at least 1 quiz today!'
      : 'Don\'t forget to complete at least 1 quiz today!'
    if (!notificationSet) {
      setInitQuizNotification()
    }
    return (
      <Content>
        {myDecks.length > 0
          ?
          <H3 style={_styles.h3}>
            {quizReminder}
          </H3>
          :
          <H3 style={_styles.h3}>
            No decks created yet..
          </H3>
        }
        <List dataArray={myDecks}
          renderRow={deck =>
            <DeckListItem
              onPressQuiz={() => this._onPressQuiz(deck.title)}
              onPressAddCard={() => this._onPressAddCard(deck.title)}
              onPressDeck={() => this._onPressDeck(deck.title)}
              title={deck.title}
              cardCount={deck.cards.length}
            />
          }>
        </List>
      </Content>
    )
  }
}
const _styles = {
  h3: {
    margin: 10,
    textAlign: 'center',
  }
}
const mapStateToProps = ({ decks }) => {
  const { myDecks, completedQuiz, notificationSet } = decks
  return { myDecks, completedQuiz, notificationSet }
}
export default connect(mapStateToProps, { setInitQuizNotification })(DeckList)