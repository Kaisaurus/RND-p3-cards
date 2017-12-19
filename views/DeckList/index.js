import React, { Component } from 'react'
import { View } from 'react-native'
import { List, Content } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DeckListItem from './DeckListItem'

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
    const { myDecks } = this.props
    return (
      <Content>
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
const mapStateToProps = ({ decks }) => ({
  myDecks: decks.myDecks
})
export default connect(mapStateToProps)(DeckList)