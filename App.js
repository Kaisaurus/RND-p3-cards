import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import styled from 'styled-components/native'
import StatusBar from './components/StatusBar'

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  background: #333;
`
const CenterTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const MainText = styled.Text`
  text-align:center;
  font-size: 20;
  color: #ddd;
`

function Decks () {
  return (
    <CenterTextView>
      <MainText>Sorry for this incomplete submission</MainText>
      <MainText>Due to unforseen circumstances I was unable to finish the program in time. </MainText>
      <MainText>My Mentor recommended to post a unfinished project and request extension.</MainText>
      <MainText>Best regards, Kai</MainText>
    </CenterTextView>
  )
}

function NewDeck () {
  return (
    <CenterTextView>
      <MainText>New Decks</MainText>
    </CenterTextView>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <MainView>
        <StatusBar />
        <Tabs />
      </MainView>
    );
  }
}
