import { View, Text , Button} from 'react-native'
import React from 'react'

const Homescreen = ({navigation}) => {
  return (
    <View style={{flex : 1, alignItems: 'center' , justifyContent:'center'}}>
      <Text>Homescreen</Text>
        <Button 
            onPress={() => navigation.navigate("Login")}
            title='Login'/>
        <Button 
            onPress={() => navigation.navigate("FlexBox")}
            title='FlexBox'/>
        <Button 
            onPress={() => navigation.navigate("FlatList")}
            title='FlatList'/>
    </View>
  )
}

export default Homescreen