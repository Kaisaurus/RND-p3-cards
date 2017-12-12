import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const MainText = styled.Text`
  text-align: center;
  font-size: ${props => props.size || 40};
  color: #222;
`

export default class HeaderText extends Component {
  static propTypes = {
    children: PropTypes.string,
    size: PropTypes.number,
  }
  render() {
    const { children, size} = this.props
    return (
      <View>
        <MainText size={size}>{children}</MainText>
      </View>
    )
  }
}
