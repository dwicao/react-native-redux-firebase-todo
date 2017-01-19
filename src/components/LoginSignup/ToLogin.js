import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


const ToLogin = props => {
	const {
		todos,
		actions,
	} = props;

	const _onPress = () => {
		Actions.loginScreen({ type: ActionConst.BACK });
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={_onPress} style={styles.button}>
				<Text style={styles.text}>I have an account</Text>
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

export default ToLogin;
