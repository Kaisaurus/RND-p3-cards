import React, { Component } from 'react'
import { H2, Text, Content, Icon, Button, Form, Label, Input, Item } from 'native-base'
import { connect } from 'react-redux'
import { addCard } from '../../actions/cardActions'

class AddCard extends Component {
  state = {
    question: '',
    addedQuestion: '',
    answer: '',
  }
  _onSubmitAddCard = () => {
    const question = this.state.question.trim()
    const answer = this.state.answer.trim()
    const { addCard } = this.props
    const { deckTitle } = this.props.navigation.state.params
    addCard({ question, answer, title: deckTitle })
    this.setState({ addedQuestion: question, question: '', answer: '' })
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
    const { addedQuestion } = this.state
    return (
      <Content padder>
        <H2 style={{ textAlign: 'center' }}>Add Card</H2>
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