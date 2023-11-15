import * as React from 'react';
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Loginscreen';
import Home from './screens/Homescreen';
import Flex from './screens/FlexBoxScreen';
import Flat from './screens/FlatListScreen';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FlexBox" component={Flex} />
        <Stack.Screen name="FlatList" component={Flat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "aqua",
    alignItems:'center' ,
    justifyContent: 'center'
  }
})

export default App;