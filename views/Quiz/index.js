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
    score: 0,
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
    const { score } = this.state
    this.setState({ score: score + 1 })
    this._getNextCard()
  }
  _onPressIncorrect = () => {
    // register incorrect answer
    this._getNextCard()
  }
  _onPressBack = () => {
    const { navigation, title } = this.props
    navigation.navigate('HomeView', { deckTitle: title })
    this._resetQuiz()
  }
  _resetQuiz = () => {
    this.setState({ score: 0, currentCard: 0 })
  }
  _onPressAddCard = () => {
    const { navigation, title } = this.props
    navigation.navigate('AddCardView', { deckTitle: title })
  }
  render() {
    const { title, cards } = this.props
    const { currentCard, showAnswer, score } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* // <Content padder> */}
        {currentCard < cards.length
          ?
          <View>
            <Text>
              Question {currentCard + 1}/{cards.length}
            </Text>
            <H1 style={_styles.header}>
              {cards[currentCard].question}
            </H1>
            {showAnswer
              ?
              <View>
                <H1 style={_styles.header}>
                  Answer: {cards[currentCard].answer}
                </H1>
                <Button
                  block
                  style={_styles.blockButton}
                  onPress={this._onPressCorrect}
                >
                  <Text>Correct</Text>
                </Button>
                <Button
                  block
                  style={_styles.blockButton}
                  onPress={this._onPressIncorrect}
                >
                  <Text>Incorrect</Text>
                </Button>
              </View>
              :
              <Button
                block
                style={_styles.blockButton}
                onPress={this._onPressAnswer}
              >
                <Text>Show Answer</Text>
              </Button>
            }
          </View>
          : cards.length === 0
            ?
            <View>
              <H1 style={_styles.header}>No cards added to the deck yet!</H1>
              <Button
                style={_styles.blockButton}
                block
                onPress={this._onPressAddCard}>
                <Text>Add a Card</Text>
              </Button>
            </View>
            :
            <View>
              <H1 style={_styles.header}>Finished!</H1>
              <H1 style={_styles.header}>Your had {score / cards.length * 100}% correct!</H1>
              <Button
                style={_styles.blockButton}
                block
                onPress={this._onPressBack}>
                <Text>Back to Decks</Text>
              </Button>
            </View>
        }
        {/* </Content> */}
      </View>
    )
  }
}
const _styles = {
  header: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  blockButton: {
    margin: 5,
  }
}
const mapStateToProps = ({ decks }, props) => {
  const { deckTitle } = props.navigation.state.params
  const { title, cards } = decks.myDecks.find(d => d.title === deckTitle)
  return ({ title, cards })
}
export default connect(mapStateToProps)(Quiz)