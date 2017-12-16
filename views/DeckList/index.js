import React, { Component } from 'react'
import { View } from 'react-native'
import { List, ListItem, Button, Text, Content, Icon, Label, Form, Item, Input } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
            <ListItem
              button
              onPress={() => this._onPressDeck(deck.title)}
              style={{ justifyContent: 'space-between' }}
            >
              <View>
                <Text>{deck.title}</Text>
                <Text note>{deck.cards.length} cards</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  transparent
                  onPress={() => this._onPressAddCard(deck.title)}
                >
                  <Icon name='md-add' style={_styles.icon} />
                </Button>
                <Button
                  transparent
                  onPress={() => this._onPressQuiz(deck.title)}
                >
                  <Icon name='md-albums' style={_styles.icon} />
                </Button>
              </View>
            </ListItem>
          }>
        </List>
      </Content>
    )
  }
}
const _styles = {
  icon: {
    fontSize: 40,
    margin: 5,
  }
}
const mapStateToProps = ({ decks }) => ({
  myDecks: decks.myDecks
})
export default connect(mapStateToProps)(DeckList)