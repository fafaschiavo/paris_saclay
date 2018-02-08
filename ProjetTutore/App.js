import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import { Font } from 'expo';

const styles = StyleSheet.create({

    full_screen_container:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },

    background_image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },

    foreground_container:{
        width: '100%',
        height: '100%',
        top: '-100%'
    },

    saclay_logo:{
        position: 'absolute',
        top: '3%',
        left: '2%',        
        width: '60%',
        height: '10%',
        resizeMode: 'contain',
    },

    home_text_title:{
        fontFamily: 'montserrat-bold',
        color: '#000000',
        textAlign: 'center',
    }

});

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }

    async componentDidMount(){
        await Font.loadAsync({
            'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
            'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
            'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
            'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
            'montserrat-thin': require('./assets/fonts/Montserrat-Thin.ttf'),
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        });

        this.setState({ fontsLoaded: true });
    }

    render() {
        console.log('Here -------------------------------')

        return (
            <View style={styles.full_screen_container}>
                <View style={styles.full_screen_container}>
                    <Image style={styles.background_image} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/background_1-01.png' }} />
                </View>
                <View style={styles.full_screen_container}>
                    <Image style={styles.saclay_logo} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/logo_paris_saclay_big.png' }} />
                    {this.state.fontsLoaded &&
                    <Text style={styles.home_text_title}>But now, it's a real mobile app</Text>
                    }
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);