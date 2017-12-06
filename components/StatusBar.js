import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { Constants } from 'expo'

const StatusBarView = styled.View`
  height: ${Constants.statusBarHeight};
`

export default () =>  {
  return (
    <StatusBarView>
      <StatusBar />
    </StatusBarView>
  )
};
