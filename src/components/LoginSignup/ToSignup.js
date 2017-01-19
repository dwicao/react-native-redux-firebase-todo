import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


const ToSignup = props => {
	const {
		todos,
		actions,
	} = props;

	const _onPress = () => {
		Actions.signupScreen();
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={_onPress} style={styles.button}>
				<Text style={styles.text}>Create an account</Text>
			</TouchableOpacity>
		</View>
	);
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		alignItems: 'center',
	},
	button: {
		alignItems: 'center',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});

export default ToSignup;
