import React, { Component } from 'react'
import HeaderText from '../../components/HeaderText';
import { H2, Text, Content, Icon, Button, Label, Form, Item, Input } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { newDeck } from '../../actions/deckActions'

class NewDeck extends Component {
  static PropTypes = {
    myDecks: PropTypes.array.isRequired
  }
  state = {
    deckTitle: '',
    errorText: '',
    successText: '',
  }
  _resetFields = () => {
    this.setState({ deckTitle: '', errorText: '', successText: '' })
  }
  _onChangeTextName = value => {
    const { myDecks } = this.props
    const { deckTitle } = this.state

    this._resetFields()
    this.setState({ deckTitle: value })

    if (myDecks.find(deck => deck['title'] === value)) {
      this.setState({ errorText: `A Deck with the name '${value}' already exists` })
    } else if (value === '') {
      this.setState({ errorText: 'Deck name cannot be empty' })
    } else {
      this.setState({ successText: 'Deck name is available' })
    }
  }
  _onSubmit = () => {
    const { deckTitle } = this.state
    const { newDeck, myDecks, navigation } = this.props

    if (this.state.deckTitle === '') {
      this.setState({ errorText: 'Deck name cannot be empty', successText: '' })
    } else {
      newDeck(deckTitle)
      this.props.navigation.navigate('DeckView', { deckTitle: deckTitle })
      this._resetFields()
    }
  }
  render() {
    const { errorText, successText } = this.state
    const alertTextColor = errorText !== '' ? '#c00' : '#0c0'
    return (
      <Content padder style={{ paddingTop: 40 }}>
        <H2 style={{ textAlign: 'center' }}>Create Deck</H2>
        <Form>
          <Item
            inlineLabel
            last
            error={errorText !== ''}
            success={successText !== ''}
          >
            <Label>Deck Name</Label>
            <Input
              onChangeText={this._onChangeTextName}
              value={this.state.deckTitle}
              autoFocus={true}
              onSubmitEditing={this._onSubmit}
            />
            {errorText !== '' &&
              <Icon name='close-circle' />
            }
            {successText !== '' &&
              <Icon name='checkmark-circle' />
            }
          </Item>
          <Text
            style={{
              color: alertTextColor,
              textAlign: 'right'
            }}
          >
            {errorText}
            {successText}
          </Text>
        </Form>
        <Button
          block
          style={{ marginTop: 20 }}
          onPress={this._onSubmit}
        >
          <Text>Create New Deck </Text>
        </Button>
      </Content>
    )
  }
}
const mapStateToProps = ({ decks }) => ({
  myDecks: decks.myDecks
})

export default connect(mapStateToProps, { newDeck })(NewDeck)
// export default NewDeck