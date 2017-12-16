import * as Expo from "expo";
import React from 'react'
import StatusBar from './components/StatusBar'
import NewDeck from './views/NewDeck'
import DeckList from './views/DeckList'
import Deck from './views/Deck'
import AddCard from './views/AddCard'
import { H1, Container, Header, Body, Title, Content, Tab, Tabs } from 'native-base'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'
import { StackNavigator } from 'react-navigation'
import { Font } from 'expo'

const HomeView = ({ navigation }) => (
  <Tabs initialPage={0}>
    <Tab heading="Deck List">
      <DeckList navigation={navigation} />
    </Tab>
    <Tab heading="New Deck">
      <NewDeck navigation={navigation} />
    </Tab>
  </Tabs>
)

const StackNav = StackNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      title: 'Udacity Cards App',
    }
  },
  DeckView: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deckTitle}`,
    }),
  },
  AddCardView: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: `Add to ${navigation.state.params.deckTitle}`,
    }),
  },
  QuizView: {
    screen: Deck,
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.deckTitle}`,
    // }),
  },
})

const myDeck = (
  <Content><H1>DECK!</H1></Content>
)

export default class App extends React.Component {
  state = {
    isReady: false
  }
  async componentWillMount() {
    this.loadFonts()
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
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
