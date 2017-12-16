import React, { Component } from 'react'
import { View } from 'react-native'
import { H1, Button, Text, Content, Icon } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StackNavigator } from 'react-navigation'

class Quiz extends Component {
  static PropTypes = {
    myDeck: PropTypes.array.isRequired
  }
  state = {
    currentCard: 0,
    showAnswer: false,
    correct: true,
  }
  _onPressAnswer = () => {
    this.setState({ showAnswer: true })
  }
  _getNextCard = () => {
    const nextCard = this.state.currentCard + 1
    this.setState({ showAnswer: false, currentCard: nextCard })

  }
  _onPressCorrect = () => {
    // register correct answer
    this._getNextCard()
  }

  _onPressIncorrect = () => {
    // register incorrect answer
    this._getNextCard()
  }
  _onPressBack = () => {
    const { navigation, title } = this.props
    navigation.navigate('HomeView', { deckTitle: title })
  }
  render() {
    const { title, cards } = this.props
    const { currentCard, showAnswer, correct } = this.state
    return (
      <Content>
        {currentCard < cards.length
          ?
          <View>
            <Text>Question {currentCard + 1}/{cards.length}</Text>
            <H1>{cards[currentCard].question}</H1>
            {showAnswer
              ?
              <View>
                <H1>Answer: {cards[currentCard].answer}</H1>
                <Button onPress={this._onPressCorrect}>
                  <Text>Correct</Text>
                </Button>
                <Button onPress={this._onPressIncorrect}>
                  <Text>Incorrect</Text>
                </Button>
              </View>
              :
              <Button
                onPress={this._onPressAnswer}
              >
                <Text>Show Answer</Text>
              </Button>
            }
          </View>
          :
          <View>
            <H1>Finished!</H1>
            <Button
              onPress={this._onPressBack}>
              <Text>Back to Decks</Text>
            </Button>
          </View>
        }
      </Content>
    )
  }
}
const mapStateToProps = ({ decks }, props) => {
  const { deckTitle } = props.navigation.state.params
  const { title, cards } = decks.myDecks.find(d => d.title === deckTitle)
  return ({ title, cards })
}
export default connect(mapStateToProps)(Quiz)