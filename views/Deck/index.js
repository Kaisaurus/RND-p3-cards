import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    // access params using navigation.state.params
    return {
      title: navigation.state.params.deckTitle
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Deck</Text>
        {/* <NavBtn onPress={() => navigation.navigate('DrawerOpen')}>
          <Text>Press here to open the drawer!</Text>
        </NavBtn> */}
      </View>
    )
  }
}

export default Deck