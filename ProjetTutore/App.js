import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({

    example_container:{
        width: '100%',
        alignItems: 'center',
    },

    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },

    red: {
        color: 'red',
    },

});

export default class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        console.log('Here -------------------------------')

        return (
            <View style={styles.example_container}>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);