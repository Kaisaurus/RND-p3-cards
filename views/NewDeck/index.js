import React, { Component } from 'react'
import HeaderText from '../../components/HeaderText';
import { H2, Text, Content, Icon, Button, Label, Form, Item, Input } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { saveDeckTitle } from '../../actions/deckActions'

class NewDeck extends Component {
  static PropTypes = {
    myDecks: PropTypes.array
  }
  state = {
    deckTitle: '',
    errorText: '',
    successText: '',
  }
  componentDidMount() {
    // console.log(this.props.myDecks)
  }
  _onNameChange = (value) => {
    const { myDecks } = this.props
    const { deckTitle } = this.state

    this.setState({ deckTitle: value, errorText: '', successText: '' })

    if (myDecks.find(deck => deck['title'] === deckTitle)) {
      this.setState({ errorText: 'A Deck with that name already exists', successText: '' })
    } else if (this.state.deckTitle === '') {
      this.setState({ successText: 'Deck name is available', errorText: '' })
    }
  }
  _onSubmit = () => {
    const { deckTitle } = this.state
    const { saveDeckTitle, myDecks } = this.props

    if (this.state.deckTitle === '') {
      this.setState({ errorText: 'Deck name cannot be empty', successText: '' })
    } else {
      saveDeckTitle(deckTitle)
      console.log('nav', this.props.navigation)
      this.props.navigation.navigate('DeckView', { deckTitle })
    }
  }
  render() {
    const { errorText, successText } = this.state
    const errorTextColor = errorText !== '' ? '#c00' : '#0c0'
    return (
      <Content padder style={{ paddingTop: 40 }}>
        {/* <H2 style={{textAlign: 'center'}}>Create Deck</H2>       */}
        <Form>
          <Item
            inlineLabel
            last
            error={errorText !== ''}
            success={successText !== ''}
          >
            <Label>Deck Name</Label>
            <Input
              // style={{textAlign: 'center'}}
              onChangeText={this._onNameChange}
              value={this.state.deckTitle}
              autoFocus={true}
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
              color: errorTextColor,
              textAlign: 'right'
            }}
          >
            {errorText}
            {successText}
          </Text>
        </Form>
        <Button
          block
          bordered
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

export default connect(mapStateToProps, { saveDeckTitle })(NewDeck)
// export default NewDeck