import React, { Component } from 'react';
import {
	StyleSheet,
	AppRegistry,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	ScrollView,
	FlatList,
	Alert,
	Linking,
	ActivityIndicator
} from 'react-native';
import { Font } from 'expo';
import { StackNavigator, } from 'react-navigation';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

const styles = StyleSheet.create({

	loading_container: {
		flex: 1,
		justifyContent: 'center'
	},

	loading_horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	},

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
	},

	content_container:{
		width: '100%',
		height: '100%',
		marginTop: '10%',
		flex: 1,
		flexDirection: 'column',
	},

	content_card:{
		width: '90%',
		marginLeft: '5%',
		marginBottom: '5%',
		flexDirection: 'column',
		backgroundColor: 'white',
		elevation: 8,
	},

	card_image_container:{
		width: null,
		height: 300,
	},

	card_image: {
		width: null,
		height: '100%',
		resizeMode: 'cover',
	},

	card_bottom_container:{
		width: null,
		height: '50%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingBottom: 10,
	},

	card_title_container:{
		backgroundColor: '#ffffff',
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
	},

	card_description_container:{
		backgroundColor: '#ffffff',
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
	},

	card_links_container:{
		width: '100%',
		backgroundColor: '#ffffff',
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	card_title:{
		fontFamily: 'montserrat-bold',
		fontSize: 15,
	},

	card_description:{
		fontFamily: 'montserrat-light',
		fontSize: 11.5,
	},

	card_like_button:{
		width: 30,
		height: 30,
		resizeMode: 'cover',
		alignSelf: 'flex-end', 
		marginLeft: 10,
	},

	main_scrollview:{
		flex: 1,
		position: 'absolute',
		top: 35,
		left:0,
		right:0,
		bottom:0
	},

	card_date:{
		alignSelf: 'flex-start',
		fontFamily: 'montserrat-bold',
		fontSize: 11.5,
	},

	date_subcontainer:{

	},

	buttons_subcontainer:{
		flexDirection: 'row',
		justifyContent: 'flex-end' 
	},

	read_more_bar:{
		width: '100%',
		backgroundColor: '#ffffff',
		paddingTop: 10,
	},

	read_more_bar_title:{
		alignSelf: 'center',
		fontFamily: 'montserrat-light',
		fontSize: 11.5,
	},

	read_more_bar_arrow:{
		alignSelf: 'center',
		width: 10,
		height: 10,
	},

	read_more_adress_container:{
		width: '100%',
		backgroundColor: '#ffffff',
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},

	read_more_adress_subcontainer:{

	},

	read_more_adress:{
		width: '80%',
		alignSelf: 'flex-start',
		fontFamily: 'montserrat-bold',
		fontSize: 11.5,
	},

});

// main PS - #62003c
// Navy Blue - #1e0060
// Ligh Grey - #f7f7f7

const API_DOMAIN_NAME = "http://b8742d5f.ngrok.io/";
const LOGIN_MEMBER_URL = "login-member-google/";
const GET_AVAILABLE_EVENTS = "get-available-events/";
const UPDATE_LIKE_STATUS = "update-like-status/";
global.member_hash = 'a3t4xs5h35d41owl6uyxxuqjqhb7geh5';






// Functions ====================================================================================================================

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





// Components ====================================================================================================================

class ReadMore extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}

	_handlePress(){
		this.setState({
			open: this.state.open ? false : true
		});
	}

	render(){
	if ( !this.state.open ) {
			return (
				<TouchableOpacity onPress={this._handlePress.bind(this)}>
					<View style={styles.read_more_bar}>
						<Text style={styles.read_more_bar_title}>
							READ MORE
						</Text>
						<Image
							source={{uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/down-arrow.png'}}
							style={styles.read_more_bar_arrow}
						/>
					</View>
				</TouchableOpacity>
			);
		} else {
			return (
				<View style={styles.card_bottom_container}>
					<TouchableOpacity onPress={this._handlePress.bind(this)}>
						<View style={styles.read_more_bar}>
							<Image
								source={{uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/up-arrow.png'}}
								style={styles.read_more_bar_arrow}
							/>
							<Text style={styles.read_more_bar_title}>
								HIDE
							</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.card_description_container}>
						<Text style={styles.card_description}>
							{this.props.long_description}
						</Text>
					</View>
						<View style={styles.read_more_adress_container}>
							<View style={styles.read_more_adress_subcontainer}>
								<Text style={styles.read_more_adress}>
									{this.props.location}
								</Text>
							</View>
							<View style={styles.read_more_adress_subcontainer}>
								<Text style={styles.read_more_adress}>
									{ this.props.address.length > 44 &&
										this.props.address.substring(0,45) + '...'
									}
									{ this.props.address.length <= 44 &&
										this.props.address
									}
								</Text>
							</View>
						</View>
				</View>
			);
		}
	}

};

class LikeButton extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			liked: props.liked || false
		};
	}

	_handlePress(){
		this.props.callbackChanged(this.props.itemId, this.state.liked ? false : true);
		this.setState({
			liked: this.state.liked ? false : true
		});
	}

	render(){
	if ( this.state.liked ) {
			return (
				<TouchableOpacity onPress={this._handlePress.bind(this)}>
					<Image
						source={{uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/like-filled-01.png'}}
						style={styles.card_like_button}
					/>
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity onPress={this._handlePress.bind(this)}>
					<Image
						source={{uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/like-empty-01.png'}}
						style={styles.card_like_button}
					/>
				</TouchableOpacity>
			);
		}
	}

};








// Views ====================================================================================================================

class HomePage extends Component {
	static navigationOptions = {
		headerVisible: false,
	}

	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			is_visitor: true,
			got_an_error: false,
			render_loading: false
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
		this.setState({render_loading: true});
		var result = signInWithGoogleAsync();
		result.parent_element = this;
		var parent_element = this;
		var is_visitor = this.state.is_visitor;

		result.then(function(data){
			if (data.cancelled || data.error) {
				result.parent_element.setState({ render_loading: false });
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
					global.member_hash = responseJson.member_hash;
					parent_element.props.navigation.navigate('Signup')
				})

			}
		});

	}

	render() {
		console.log('Rendering HomePage')
		if (!this.state.render_loading) {
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
		}else{
			return (
				<View style={styles.full_screen_container}>
					<View style={styles.full_screen_container}>
						<Image style={styles.background_image} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/background_1-01.png' }} />
					</View>
					<View style={styles.full_screen_container}>
						<Image style={styles.saclay_logo} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/logo_paris_saclay_big.png' }} />
					</View>
					<View style={[styles.loading_container, styles.loading_horizontal]}>
							<ActivityIndicator size="large" color="#ffffff" />
						</View>
				</View>
			);
		}
	}
}








class ContentPage extends Component {
	static navigationOptions = {
		title: 'Signup',
		headerTitleStyle: {
		  fontFamily: 'montserrat-bold',
		},
	};

	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			event_loaded: false,
			current_event_list: [],
			show_liked: false,
		};

		this.refreshEventList = this.refreshEventList.bind(this);
		this.handleFacebookClick = this.handleFacebookClick.bind(this);
		this.likeEvent = this.likeEvent.bind(this);
	}

	refreshEventList(){
		data = {}
		data.member_hash_id = global.member_hash;

		fetch(API_DOMAIN_NAME + GET_AVAILABLE_EVENTS, {
			method: 'POST',
			parent_element: this,
			body: JSON.stringify(data),
		})
		.then((response) => {
			var responseJson = JSON.parse(response._bodyInit);
			for (var i = responseJson.length - 1; i >= 0; i--) {
				if (responseJson[i].website == 'none') {
					responseJson[i].website = false;
				}
				if (responseJson[i].facebook_event_link == 'none') {
					responseJson[i].facebook_event_link = false;
				}
				responseJson[i].show_liked = false;
				responseJson[i].id = i;
			}
			this.setState({current_event_list: responseJson});

		})
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


	handleFacebookClick(url_to_access){        
		console.log(url_to_access);
		Linking.canOpenURL(url_to_access).then(supported => {
			if (supported) {
				Linking.openURL(url_to_access);
			} else {
				Alert.alert('Sorry, your browser is not supported...')
			}
		});

	}

	likeEvent(item_id, new_status){
		data = {}
		data.event_id = item_id;
		data.status = new_status ? 1 : 0;
		data.member_hash_id = global.member_hash;

		fetch(API_DOMAIN_NAME + UPDATE_LIKE_STATUS, {
			method: 'POST',
			parent_element: this,
			body: JSON.stringify(data),
		})
		.then((response) => {
			console.log(response);
		})

	}

	render() {
		console.log('Rendering ContentPage');
		if (!this.state.event_loaded) {
			this.refreshEventList();
			this.state.event_loaded = true;
		}
		return (

			<View style={{flex: 1}}>
				<View style={styles.full_screen_container}>
					<Image style={styles.background_image} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/background_1-01.png' }} />
				</View>
				{this.state.fontsLoaded &&
				<FlatList
					data={this.state.current_event_list}
					style={styles.main_scrollview}
					renderItem={
						({item}) =>
							<View style={styles.content_card}>
								<View style={styles.card_image_container}>
									<Image style={styles.card_image} source={{ uri: item.featured_image }} />
								</View>
								<View style={styles.card_bottom_container}>
									<View style={styles.card_title_container}>
										<Text style={styles.card_title}>
											{item.event_title}
										</Text>
									</View>
									<View style={styles.card_description_container}>
										<Text style={styles.card_description}>
											{item.short_description}
										</Text>
									</View>
									<View style={styles.card_links_container}>
										<View style={styles.date_subcontainer}>
											<Text style={styles.card_date}>
												{item.date}
											</Text>
										</View>
										<View style={styles.buttons_subcontainer}>
											{ item.website &&
											<TouchableHighlight onPress={() => { this.handleFacebookClick( item.website ) }}  underlayColor="#1e0060">
												<Image style={styles.card_like_button} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/grid-world.png' }} />
											</TouchableHighlight>
											}
											{ item.facebook_event_link &&
											<TouchableHighlight onPress={() => { this.handleFacebookClick( item.facebook_event_link ) }}  underlayColor="#1e0060">
												<Image style={styles.card_like_button} source={{ uri: 'https://s3.eu-west-3.amazonaws.com/paris-saclay/icons/facebook-logo-button.png' }} />
											</TouchableHighlight>
											}
											<LikeButton liked={item.is_liked==1 ? true : false} callbackChanged={this.likeEvent} itemId={item.key} />
										</View>
									</View>
									<ReadMore long_description={item.long_description} location={item.location} address={item.address} />
								</View>
							</View>
					}
				/>
				}
			</View>

		);
	}
}

export default StackNavigator(
	{
		// Home: { screen: HomePage },
		Home: { screen: ContentPage },
		Signup: { screen: ContentPage },
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		}
	}
);

AppRegistry.registerComponent('AwesomeProject', () => HomePage);