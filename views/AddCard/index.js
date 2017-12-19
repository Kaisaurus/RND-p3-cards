import React, { Component } from 'react'
import { H2, Text, Content, Icon, Button, Form, Label, Input, Item } from 'native-base'
import { connect } from 'react-redux'
import { addCard } from '../../actions/cardActions'

class AddCard extends Component {
  state = {
    question: '',
    addedQuestion: '',
    answer: '',
    showError: false,
  }
  _onSubmitAddCard = () => {
    const { question, answer } = this.state
    const { addCard } = this.props
    if (question === '' || answer === '') {
      this.setState({ showError: true })
    } else {
      const { deckTitle } = this.props.navigation.state.params
      addCard({ question: question.trim(), answer: answer.trim(), title: deckTitle })
      this.setState({ addedQuestion: question.trim(), question: '', answer: '', showError: false })
    }
  }
  _onSubmitQuestion = () => {
    this._answerInput._root.focus()
  }
  _onChangeTextAnswer = value => {
    this.setState({ answer: value.trimLeft() })
  }
  _onChangeTextQuestion = value => {
    this.setState({ question: value.trimLeft() })
  }
  render() {
    const { deckTitle } = this.props.navigation.state.params
    const { addedQuestion, showError, question, answer } = this.state
    const errorMsg = question === ''
      ? 'Question may not be empty'
      : answer === ''
        ? 'Answer may not be empty'
        : '';
    return (
      <Content padder>
        <H2 style={{ textAlign: 'center' }}>Add Card</H2>
        {
          showError &&
          <Text style={{ color: '#c00' }}>{errorMsg}</Text>
        }
        {addedQuestion !== '' &&
          <Text style={{ textAlign: 'center', color: '#0a7' }}>
            "{addedQuestion}"{"\n"}
            <Text>
              added to{'\u0020'}
            </Text>
            <Text style={{ color: '#08f' }}>
              {deckTitle}
            </Text>
          </Text>
        }
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
        </Form>
        <Button
          block
          onPress={this._onSubmitAddCard}>
          <Text>Add Card</Text>
          <Icon name='md-add' />
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