import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { Button, Text, ListItem, Icon } from 'native-base'
import PropTypes from 'prop-types'

export default class extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    onPressQuiz: PropTypes.func.isRequired,
    onPressAddCard: PropTypes.func.isRequired,
    onPressDeck: PropTypes.func.isRequired,
    cardCount: PropTypes.number.isRequired,
  }
  state = {
    bounceValue: new Animated.Value(14)
  }

  _onPressDeck = () => {
    const { bounceValue } = this.state
    const { onPressDeck } = this.props
    this.setState({ deckPressed: true })
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 20, duration: 50 }),
      Animated.timing(bounceValue, { toValue: 14, duration: 20 }),
    ]).start(() => {
      onPressDeck()
      this.setState({ deckPressed: false })

    })

  }
  render() {
    const { title, onPressAddCard, onPressQuiz, cardCount } = this.props
    const { bounceValue } = this.state
    return (
      <ListItem
        button
        style={{ justifyContent: 'space-between' }}
        onPress={this._onPressDeck}
      >
        <View>
          <Button transparent block>
            <Animated.Text style={{ fontSize: bounceValue }}>
              {title}
            </Animated.Text>
          </Button>
          <Text note>{cardCount} cards</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            transparent
            onPress={() => onPressAddCard(title)}
          >
            <Icon name='md-add' style={_styles.icon} />
          </Button>
          <Button
            transparent
            onPress={() => onPressQuiz(title)}
          >
            <Icon name='md-albums' style={_styles.icon} />
          </Button>
        </View>
      </ListItem>
    )
  }
}
const _styles = {
  icon: {
    fontSize: 40,
    margin: 5,
  }
}