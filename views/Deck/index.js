import React, { Component } from 'react'
import { View } from 'react-native'
import { H1, H2, H3, Text, Content, Icon, Button } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Deck extends Component {
  static PropTypes = {
    deck: PropTypes.array.isRequired
  }
  _onPressQuiz = () => {
    const { navigation, deck } = this.props
    navigation.navigate('QuizView', { deckTitle: deck.title })
  }
  _onPressAddCard = () => {
    const { navigation, deck } = this.props
    navigation.navigate('AddCardView', { deckTitle: deck.title })
  }
  render() {
    const { deck } = this.props
    const cardCount = deck.cards.length.toString()
    return (
      // using View instead of recommended '<Content></Content>' because fluid height didnt work
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <H1 style={{ margin: 20 }}>{deck.title}</H1>
        <H2>{cardCount} Cards</H2>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Button rounded style={_styles.icon}>
            <Icon name='md-create' />
          </Button>
          <Button rounded style={_styles.icon}>
            <Icon name='md-trash' />
          </Button>
        </View>
        <Button large style={_styles.bigBtn} onPress={this._onPressAddCard}>
          <Text> Add Card</Text>
          <Icon name='md-add' style={{ fontSize: 30 }} />
        </Button>
        <Button large style={_styles.bigBtn} onPress={this._onPressQuiz}>
          <Text> Start Quiz!</Text>
          <Icon name='md-albums' />
        </Button>
      </View>
    )
  }
}

const _styles = {
  icon: {
    margin: 5
  },
  bigBtn: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center', // this is needed for center align
    margin: 5
  }
}

const mapStateToProps = (state, props) => {
  const { deckTitle } = props.navigation.state.params
  return ({
    deck: state.decks.myDecks.find(deck => deck.title === deckTitle),
  })
}

export default connect(mapStateToProps, {})(Deck)