import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
	View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ToRegister from './ToRegister';
import spinner from '../../icons/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonLogin extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this.buttonAnimated = new Animated.Value(0);
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();

		const userLogin = this.props.actions.startLogin('test@example.com', '12345678');

		userLogin
			.then(() => {
				Actions.mainScreen();
			}, error => {
				Alert.alert('Login Error\nPlease try again!');
			})
			.then(() => {
				this.setState({ isLoading: false });
				this.buttonAnimated.setValue(0);
			});
	}

	render() {
		const changeWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
	  });

		return (
			<View style={styles.container}>
				<Animated.View style={{width: changeWidth}}>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							{this.state.isLoading ?
								<Image source={spinner} style={styles.image} />
								:
								<Text style={styles.text}>LOGIN</Text>
							}
					</TouchableOpacity>
				</Animated.View>
				<ToRegister {...this.props} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E7BCAA',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 1,
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
});
