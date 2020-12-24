import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, Alert, ActivityIndicator } from 'react-native'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });