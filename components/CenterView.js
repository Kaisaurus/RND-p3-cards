import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default class CenterView extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    const { children } = this.props
    return (
      <MainView>
        {children}
      </MainView>
    )
  }
}
