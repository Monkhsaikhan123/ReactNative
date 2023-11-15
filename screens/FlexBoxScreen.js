import { View, Text } from 'react-native'
import React from 'react'

const FlexBoxScreen = () => {
  return (
    <View style={{backgroundColor:"yellow" , flex:1 , flexDirection:'row' , alignItems:'center', justifyContent:'space-evenly' }}>
      <View style={{backgroundColor:"aqua", width:100, height:200}}></View>
      <View style={{backgroundColor:"orange", width:100, height:200}}></View>
      <View style={{backgroundColor:"red", width:100, height:200}}></View>
    </View>
  )
}

export default FlexBoxScreen