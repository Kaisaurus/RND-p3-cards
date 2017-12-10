import React from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import StatusBar from './components/StatusBar'
import NewDeck from './views/NewDeck'
import DeckList from './views/DeckList'

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  background: #333;
`

const Tabs = TabNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
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
    )
  }
}
