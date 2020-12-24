import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, Alert, ActivityIndicator } from 'react-native'

import axios from 'axios';
import pokemon from 'pokemon';
import Pokemon from './components/Pokemon';

const POKE_API = 'https://pokeapi.co/api/v2';
export default class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            isloading: false,
            searchInput: '',
            name : '',
            pic : '',
            types : [],
            desc : ''
        }
    }

    seachPokemon = async() =>{
        try{
            const pokemonID = pokemon.getId(this.state.searchInput)

            this.setState({isloading : true})

            const { data : pokemonData} = await axios.get(`${POKE_API}/pokemon/${pokemonID}`)
            const { data : pokemonSpeciesData} = await axios.get(`${POKE_API}/pokemon-species/${pokemonID}`)

            const { name, sprites, types } = pokemonData
            const { flavor_text_entries } = pokemonSpeciesData

            this.setState({
                name,
                pic: sprites.front_default,
                types: this.getTypes(types),
                desc: this.getDescription(flavor_text_entries),
                isloading: false
            })
        }
        catch (err) {
            Alert.alert('Error','Pokemon Not Found !!')
        }
    }

    getTypes = (types) => {
        types.map(({slot, type}) => ({
            id : slot, 
            name: type.name
        }))
    }

    getDescription = (entries) => {
        entries.find((item) => item.language.name === 'en').flavor_text
    }

    render() {
        const { isloading, searchInput, name, pic, types, desc} = this.state
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.headContainer}>
                    <View style={styles.container}>
                        <View style={styles.containertxtInput}>
                            <TextInput 
                                style={styles.textInput}
                                placeholder='Search Pokemon'
                                onChangeText={(searchInput) => this.setState({searchInput})}
                                value={this.state.searchInput}
                            />
                        </View>
                        <View style={styles.containerbutton}>
                            <Button
                                title='Search'
                                color='#FF8B00'
                                onPress={this.seachPokemon}
                            />
                        </View>

                        <View style={styles.mainContainer}>
                            {isloading && <ActivityIndicator size="large" color="#FF0000"/>}
                            {!isloading && (
                                <Pokemon name={name} pic={pic} types={types} desc={desc}/>
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        backgroundColor: '#EAEAEA',
    },
    headContainer : {
        flex : 1,
        marginTop : 100,
        padding : 20,
        borderWidth : 1
    },
    container : {
        flexDirection : 'row',
        alignItems : 'center', 
        justifyContent : 'space-around'
    },
    textInput : {
        height : 35,
        marginBottom : 10,
        borderColor : '#fee',
        borderWidth : 1,
        backgroundColor : '#E1E1E1',
        paddingLeft : 10,
        borderRadius : 10
    },
    containertxtInput : {
        width : 200, 
        height : 30,
        flex : 3
    },
    containerbutton : {flex : 1}
  });