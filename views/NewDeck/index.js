import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import HeaderText from '../../components/HeaderText';
import CenterView from '../../components/CenterView';

export default class NewDeck extends Component {
  render() {
    return (
      <CenterView>
        <HeaderText>New Decks</HeaderText>
      </CenterView>
    )
  }
}