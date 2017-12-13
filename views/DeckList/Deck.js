import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { H1, H3 } from 'native-base'
import { Grid, Col } from 'react-native-easy-grid'
import PropTypes from 'prop-types'

export default class Deck extends Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.number,
  }
  state = {  }
  render() {
    const { title, cards } = this.props
    return (
      <Grid>
        <Col>
          <H1>{title}</H1>
        </Col>
        <Col>
          <H3>{cards} cards</H3>        
        </Col>        
      </Grid>      
    )
  }
}