import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'

const Pokemon = ({name, pic, types, desc}) => {
    return (
        <View> 
            <Image 
                source={{uri : pic}}
                resizeMode='contain'
            />
            <Text> {name} </Text>

            <FlatList 
                data={types}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>    
                )}
            />
            <View>
                <Text> {desc} </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainDetail : {
        padding : 30,
        alignItems : 'center'
    },
    image : {
        width : 150,
        height : 150,
    },
    mainText : {
        fontSize : 25,
        fontWeight : 'bold',
        textAlign : 'center',
        
    }
})

export default Pokemon;
