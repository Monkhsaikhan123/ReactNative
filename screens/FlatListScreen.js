import {Text, View , FlatList, TouchableOpacity, Alert} from 'react-native'
import React from 'react'

const FlatListScreen = () => {

    const persons = [
        {name: 'Baigal' , color:'yellow'},
        {name: 'Bold' , color:'red'},
        {name: 'Jargal' , color:'blue'},
        {name: 'Saihan' , color:'purple'},
        {name: 'Bymba' , color:'aqua'},
        {name: 'Zoloo' , color:'green'},
    ]
  return (

    <FlatList
        data={persons}
        renderItem={(array) => (
            <TouchableOpacity onPress={()=> Alert.alert(`${array.item.name}`)}>
                <View 
                    style={{
                        backgroundColor:array.item.color,
                        padding:20,
                        marginHorizontal:10,
                    }}>
                        <Text>{array.item.name}</Text>
                </View>
            </TouchableOpacity>
        )}
        keyExtractor={(item)=>item.id}
    />
  )
}

export default FlatListScreen


