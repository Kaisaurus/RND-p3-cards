import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Deck extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.number.isRequired,
  }
  state = {  }
  render() {
    const { title, cards } = this.props
    return (
      <View>
        <Text>{title}</Text>
        <Text>{cards} cards</Text>
      </View>
    )
  }
}