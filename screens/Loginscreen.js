import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'

const Loginscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
      <TextInput style={styles.textinput}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "yellow",
      alignItems:'center' ,
      justifyContent: 'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
    
  })

export default Loginscreen