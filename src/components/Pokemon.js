import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'

const Pokemon = ({name, pic, types, desc}) => {
    return (
        <View style={styles.mainDetail}> 
            <Image 
                style={styles.image}
                source={{uri : pic}}
                resizeMode='contain'
            />
            <Text style={styles.mainText}> {name} </Text>

            <FlatList 
                columnWrapperStyle={styles.types}
                data={types}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={[styles[item.name], styles.type]}>
                        <Text style={styles.typeText}>{item.name}</Text>
                    </View>    
                )}
            />
            <View style={styles.desception}>
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
        width : 200,
        height : 200,
    },
    mainText : {
        fontSize : 25,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    desception : {
         marginTop : 20
    },
    types : {
        flexDirection : 'row',
        marginTop : 20,
    },
    type : {
        padding : 5,
        width : 100,
        alignItems : 'center'
    },
    typeText : {
        color: '#ffffff'
    },
    normal : {
        backgroundColor : '#8a8a59'
    },
    fire : {
        backgroundColor : '#f08030'
    },
    water : {
        backgroundColor : '#86f090'
    },
    electric : {
        backgroundColor : '#f8d030'
    },
    grass : {
        backgroundColor : '#78c850'
    },
    ice : {
        backgroundColor : '#98d8d8'
    },
    fighting : {
        backgroundColor : '#c03028'
    },
    posison : {
        backgroundColor : '#a040a0'
    },
    ground : {
        backgroundColor : '#e9c968'
    },
    flying : {
        backgroundColor : '#a890f0'
    },
    phychic : {
        backgroundColor : '#f85888'
    },
    bug : {
        backgroundColor : '#a8b820'
    },
    rock : {
        backgroundColor : '#b8a038'
    },
    ghost : {
        backgroundColor : '#705898'
    },
    dragon : {
        backgroundColor : '#7038f8'
    },
    dark : {
        backgroundColor : '#705848'
    },
    steel : {
        backgroundColor : '#b8b8d0'
    },
    fairy : {
        backgroundColor : '#e898e8'
    },
})

export default Pokemon;
