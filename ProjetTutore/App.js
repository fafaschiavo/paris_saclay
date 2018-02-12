import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TextInput, Button,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { Font } from 'expo';
import { StackNavigator, } from 'react-navigation';

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
        top: '7%',
        left: '2%',        
        width: '60%',
        height: '10%',
        resizeMode: 'contain',
    },

    home_text_title:{
        fontFamily: 'montserrat-bold',
        color: '#000000',
        textAlign: 'center',
    },

    login_container:{
        flex: 1,
    },

    text_input_field:{
        fontFamily: 'montserrat-bold',
        color: '#000000',
        textAlign: 'left',
        width: '70%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 3
    },

    organizer_button_text:{
        fontFamily: 'montserrat-medium',
        color: '#1e0060',
        textAlign: 'center',
        fontSize: 12,
    },

    visitor_button_text:{
        fontFamily: 'montserrat-medium',
        color: '#62003c',
        textAlign: 'center',
        fontSize: 12,
        elevation: 3
    },

    options_buttons_container:{
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    options_icon_container:{
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 110,
        height: 110
    },

    options_icon:{
        width: 50,
        height: 50
    },

    option_selected:{

    },

    google_login_button:{
        backgroundColor: '#cf4332',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    google_login_button_text:{
        fontFamily: 'montserrat-bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 10
    },

    google_login_logo:{
        width: 30,
        height: 30
    },

    generic_button_white:{
        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },

    sign_up_button:{
        paddingRight: 25,
        paddingLeft: 25,
    },

    generic_button_white_text:{
        fontFamily: 'montserrat-bold',
        color: '#62003c',
    },

    generic_button_red:{
        backgroundColor: '#62003c',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },

    generic_button_red_text:{
        fontFamily: 'montserrat-bold',
        color: 'white',
    },

    generic_button_blue:{
        backgroundColor: '#1e0060',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },

    generic_button_blue_text:{
        fontFamily: 'montserrat-bold',
        color: 'white',
    },

    buttons_container:{
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    title_text:{
        fontSize: 15,
        fontFamily: 'montserrat-bold',
        color: 'white',
    },

    simple_shadow:{
        backgroundColor: 'white',
        elevation: 8
    },

    checked_icon:{
        width: 15,
        height: 15,
        position: 'absolute',
        right: '7%',
        top: '5%'
    },

    error_message:{
        color: '#cf4332',
        marginTop: 5
    }

});

// main PS - #62003c
// Navy Blue - #1e0060
// Ligh Grey - #f7f7f7

const API_DOMAIN_NAME = "http://3c16dfee.ngrok.io/";
const LOGIN_MEMBER_URL = "login-member-google/";






async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '74642827015-39qlhu84n864p9fdn3jtqtce9kl94fbl.apps.googleusercontent.com',
      iosClientId: '74642827015-l812k3m5oliib904no7lcqqev33qq6cm.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}








class HomePage extends Component {
    static navigationOptions = {
        headerVisible: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            is_visitor: true,
            got_an_error: false
        };

        this.visitorTypeChanged = this.visitorTypeChanged.bind(this);
        this.startLoginProces = this.startLoginProces.bind(this);
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

    visitorTypeChanged(is_visitor){
        this.setState({ is_visitor: is_visitor});

    }

    startLoginProces(){
        var result = signInWithGoogleAsync();
        result.parent_element = this;
        var parent_element = this;
        var is_visitor = this.state.is_visitor;

        result.then(function(data){
            if (data.cancelled || data.error) {
                result.parent_element.setState({ got_an_error: true});
            }else{
                result.parent_element.setState({ got_an_error: false});

                data.user.is_visitor = is_visitor;
                fetch(API_DOMAIN_NAME + LOGIN_MEMBER_URL, {
                    method: 'POST',
                    parent_element: result.parent_element,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    parent_element.props.navigation.navigate('Signup')
                })

            }
        });

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
                </View>
                <View style={[styles.full_screen_container, styles.login_container]}>
                    <View style={{flex: 1}} />
                    <View style={{flex: 2, alignItems: 'center'}}>
                        {this.state.fontsLoaded &&
                        // <Text style={styles.home_text_title}>But now, it's a real mobile app 2</Text>
                        [
                        <View style={{flex: 2}} />,
                        <Text style={styles.title_text}>YOU ARE?</Text>,
                        <View style={{flex: 1}} />,
                        <View style={styles.options_buttons_container}>
                            <TouchableOpacity style={styles.simple_shadow} onPress={() => this.visitorTypeChanged(false)}>
                                <View style={styles.options_icon_container}>
                                    {!this.state.is_visitor &&
                                    <Image style={styles.checked_icon} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/checked_blue.png' }} />
                                    }
                                    <Image style={styles.options_icon} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/calendar.png' }} />
                                    <Text style={styles.organizer_button_text}>EVENT ORGANIZER</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.simple_shadow} onPress={() => this.visitorTypeChanged(true)}>
                                <View style={styles.options_icon_container}>
                                    {this.state.is_visitor &&
                                    <Image style={styles.checked_icon} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/checked_red.png' }} />
                                    }
                                    <Image style={styles.options_icon} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/confetti.png' }} />
                                    <Text style={styles.visitor_button_text}>VISITOR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>,
                        <View style={{flex: 1}} />,
                        <View style={styles.buttons_container}>
                            <TouchableOpacity onPress={this.startLoginProces} style={styles.simple_shadow}>
                                <View style={styles.google_login_button}>
                                    <Image style={styles.google_login_logo} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/google_login-01.png' }} />
                                    <Text style={styles.google_login_button_text}>LOGIN or SIGN UP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>,
                        (this.state.got_an_error &&
                        <Text style={[styles.title_text, styles.error_message]}>Sorry, I got an error...</Text>
                        ),
                        <View style={{flex: 2}} />
                        ]
                        }
                    </View>
                    <View style={{flex: 1}} />
                </View>
            </View>
        );
    }
}










class SignupPage extends Component {
    static navigationOptions = {
        title: 'Signup',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
        },
    };

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
                </View>
                <View style={[styles.full_screen_container, styles.login_container]}>
                    <View style={{flex: 1}} />
                    <View style={{flex: 2, alignItems: 'center'}}>
                        {this.state.fontsLoaded &&
                        // <Text style={styles.home_text_title}>But now, it's a real mobile app 2</Text>
                        [
                        <View style={{flex: 2}} />,
                        <TextInput
                            style={styles.text_input_field}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                        />,
                        <View style={{flex: 1}} />,
                        <TextInput
                            style={styles.text_input_field}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                        />,
                        <View style={{flex: 1}} />,
                        <View style={styles.buttons_container}>
                            <TouchableOpacity style={{elevation: 3}} onPress={this._onPressButton}>
                                <View style={[styles.generic_button_white, styles.sign_up_button]}>
                                    <Text style={styles.generic_button_white_text}>SIGN UP2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{elevation: 3}} onPress={this._onPressButton}>
                                <View style={[styles.generic_button_white, styles.sign_up_button]}>
                                    <Text style={styles.generic_button_white_text}
                                    onPress={() => this.props.navigation.navigate('Home')}
                                    >
                                    LOGIN2
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>,
                        <View style={{flex: 2}} />
                        ]
                        }
                    </View>
                    <View style={{flex: 1}} />
                </View>
            </View>
        );
    }
}

export default StackNavigator(
    {
        Home: { screen: HomePage },
        Signup: { screen: SignupPage },
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

AppRegistry.registerComponent('AwesomeProject', () => HomePage);