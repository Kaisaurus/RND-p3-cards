import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import HeaderText from '../../components/HeaderText';
import CenterView from '../../components/CenterView';
// import Deck from './Deck'

export default class DeckList extends Component {
  render() {
    return (
      <CenterView>
        <HeaderText>Deck List</HeaderText>
        <ScrollView>
          {/* <Deck name={'Deck 1'} cards={10} /> */}

        </ScrollView>
      </CenterView>
    )
  }
}