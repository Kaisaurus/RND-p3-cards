import React from 'react'
import StatusBar from './components/StatusBar'
import NewDeck from './views/NewDeck'
import DeckList from './views/DeckList'
import DeckList from './views/Deck'
import { H1, Container, Header, Body, Title, Content, Tab, Tabs } from 'native-base'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'
import { StackNavigator } from 'react-navigation'

const StackNav = StackNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      title: 'HomeView',
    }
  },
  DeckView: {
    screen: Deck,
    navigationOptions: {
      title: 'DeckView',
    }
  },
})

const HomeView = (
  <Tabs initialPage={0}>
    <Tab heading="New Deck">
      <NewDeck />
    </Tab>
    <Tab heading="Deck List">
      <DeckList />
    </Tab>
  </Tabs>
)

const Deck = (
  <Content><H1>DECK!</H1></Content>
)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store.store}>
        <PersistGate persistor={store.persistor}>
          <Container>
            <StatusBar />
            <StackNav />


          </Container>
        </PersistGate>
      </Provider>
    )
  }
}
