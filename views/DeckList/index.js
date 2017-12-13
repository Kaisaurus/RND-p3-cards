import React, { Component } from 'react'
import Deck from './Deck'
import { List, ListItem, H2, Text, Content, Button, Label, Form, Item, Input } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'

const items = ['Deck1', 'Deck2', 'Deck2']

export default class DeckList extends Component {
  render() {
    return (
      <Content>
        <H2>Deck List</H2>
        <Grid style={{ flex: 1 }}>

          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item} boom</Text>
              </ListItem>
            }>
          </List>
        </Grid>
      </Content>
    )
  }
}