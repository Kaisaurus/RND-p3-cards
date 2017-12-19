import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { H1, H2, H3, Text, Content, Icon, Button } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { deleteDeck } from '../../actions/deckActions'

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
  _onPressDeleteDeck = () => {
    Alert.alert(
      'Delete Deck',
      'Are you sure you want to delete this Deck?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        {
          text: 'OK', onPress: this._onPressConfirmDelete
        },
      ]
    )
  }
  _onPressConfirmDelete = () => {
    this.props.navigation.goBack()
    this.props.deleteDeck(this.props.deck.title)
  }
  render() {
    const { deck } = this.props
    if (deck) { //without the if it pops an error on delete deck
      const cardCount = deck.cards.length.toString()
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <H1 style={{ margin: 20 }}>{deck.title}</H1>
          <H2>{cardCount} Cards</H2>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            {/*
            <Button rounded style={_styles.icon}>
              <Icon name='md-create' />
            </Button>
            for future 'edit' functionality
            */}
            <Button rounded style={_styles.icon} onPress={this._onPressDeleteDeck}>
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
    } else {
      return <View><Text>Something went wrong... couldn't find the Deck!?</Text></View>
    }
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

export default connect(mapStateToProps, { deleteDeck })(Deck)