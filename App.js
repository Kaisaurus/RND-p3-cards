import React from 'react'
import { Provider } from 'react-redux'
import StatusBar from './components/StatusBar'
import NewDeck from './views/NewDeck'
import DeckList from './views/DeckList'
import { Container, Header, Body, Title, Content, Tab, Tabs } from 'native-base'

export default class App extends React.Component {
  render() {
    return (      
      <Container>
        <StatusBar />        
        <Tabs initialPage={0}>
          <Tab heading="New Deck">
            <NewDeck />            
          </Tab>
          <Tab heading="Deck List">
            <DeckList />
          </Tab>          
        </Tabs>
      </Container>      
    )
  }
}
