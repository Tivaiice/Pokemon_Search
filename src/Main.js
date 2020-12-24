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
            weight : '',
            desc : ''
        }
    }

    seachPokemon = async() =>{
        try{
            const pokemonID = pokemon.getId(this.state.searchInput)

            this.setState({isloading : true})

            const { data : pokemonData} = await axios.get(`${POKE_API}/pokemon/${pokemonID}`)
            const { data : pokemonSpeciesData} = await axios.get(`${POKE_API}/pokemon-species/${pokemonID}`)

            const { name, sprites, types, weight } = pokemonData
            const { flavor_text_entries } = pokemonSpeciesData

            this.setState({
                name,
                weight,
                pic: sprices.front_default,
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
        const { isloading, searchInput, name, pic, types, desc } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection : 'row'}}>
                    <View style={{borderWidth : 1}}>
                        <TextInput 
                            placeholder='Search Pokemon'
                            onChangeText={(searchInput) => this.setState({searchInput})}
                            value={this.state.searchInput}
                        />
                    </View>
                    <View style={{borderWidth : 1}}>
                        <Button
                            title='Search'
                            color='#FF8B00'
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A5EAFD',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });