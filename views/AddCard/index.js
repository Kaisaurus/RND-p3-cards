import React, { Component } from 'react'
import { H2, Text, Content, Icon, Button, Form, Label, Input, Item } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addCard } from '../../actions/cardActions'

class AddCard extends Component {
  static PropTypes = {
    // deck: PropTypes.array.isRequired
  }
  state = {
    question: '',
    answer: '',
  }
  _onSubmitAddCard = () => {
    const { question, answer } = this.state
    const { addCard } = this.props
    const { deckTitle } = this.props.navigation.state.params
    addCard({ question, answer, title: deckTitle })
    // const { navigation, deck } = this.props
    // this.props.navigation.navigate('DeckView', { deckTitle: deck.title })
  }
  _onSubmitQuestion = () => {
    this._answerInput._root.focus()
  }
  _onChangeTextAnswer = value => {
    this.setState({ answer: value })
  }
  _onChangeTextQuestion = value => {
    this.setState({ question: value })
  }
  render() {
    const { deckTitle } = this.props.navigation.state.params
    // const cardCount = deck.cards.length.toString()
    return (
      <Content padder>
        <H2 style={{ textAlign: 'center' }}>Add Card</H2>
        <Form>
          <Item
            inlineLabel
            style={{ borderWidth: 2, borderColor: '#000' }}
          >
            <Label>Question</Label>
            <Input
              multiline={true}
              numberOfLines={4}
              onSubmitEditing={this._onSubmitQuestion}
              onChangeText={this._onChangeTextQuestion}
              value={this.state.question}
              autoFocus={true}
            />
          </Item>
          <Item
            inlineLabel
            last
            style={{ borderWidth: 2, borderColor: '#000' }}
          >
            <Label>Answer</Label>
            <Input
              multiline={true}
              numberOfLines={4}
              ref={c => this._answerInput = c}
              value={this.state.answer}
              onChangeText={this._onChangeTextAnswer}
              onSubmitEditing={this._onSubmitAddCard}
            />
          </Item>
          <Text
            style={{
              // color: errorTextColor,
              textAlign: 'right'
            }}
          >
            {/* {errorText} */}
            {/* {successText} */}
          </Text>
        </Form>
        <Button
          large
          block
          onPress={this._onSubmitAddCard}>
          <Text>Add Card</Text>
          <Icon name='md-add' style={{ fontSize: 40 }} />
        </Button>
      </Content>
    )
  }
}

const _styles = {
  icon: {
    margin: 5
  },
}


export default connect(undefined, { addCard })(AddCard)