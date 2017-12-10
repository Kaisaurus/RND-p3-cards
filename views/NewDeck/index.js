import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import HeaderText from '../../components/HeaderText';
import CenterView from '../../components/CenterView';
import { FormLabel, FormInput } from 'react-native-elements'
import { Button } from 'react-native-elements'

export default class NewDeck extends Component {
  state = {
    name: '',
  }
  componentDidMount() {
    console.log(this.nameInput)
    this.nameInput.focus()
  }
  onNameChange = function (e, r) {
    const { name, value } = r;
    this.setState({ name: value });
  }
  onSubmit = () => {
    if (this.state === '') {
      this.nameInput.shake()
    }
  }
  render() {
    return (
      <CenterView>
        <HeaderText>New Deck</HeaderText>
        <FormLabel>Name</FormLabel>
        <FormInput
          onChangeText={this.onNameChange}
          ref={nameInput => this.nameInput = nameInput}
        />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <Button
          title='Add Deck'
          leftIcon={{name: 'archive' }}
          onPress={this.onSubmit}
          fontSize={20}
          raised
          borderRadius={5}
          backgroundColor={'#397af8'}
        />
      </CenterView>
    )
  }
}