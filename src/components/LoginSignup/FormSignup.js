import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
} from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../icons/username.png';
import passwordImg from '../../icons/password.png';

const FormSignup = props => {
	const {
		todos,
		actions,
		formData,
	} = props;

	const _onChangeEmailSignup = value => {
		actions.changeEmailSignup(value);
	};

	const _onChangePasswordSignup = value => {
		actions.changePasswordSignup(value);
	};

	return (
		<KeyboardAvoidingView behavior='padding'
			style={styles.container}>
			<UserInput source={usernameImg}
				onChangeText={_onChangeEmailSignup}
				placeholder='Username'
				autoCapitalize={'none'}
				returnKeyType={'done'}
				autoCorrect={false} />
			<UserInput source={passwordImg}
				onChangeText={_onChangePasswordSignup}
				secureTextEntry={true}
				placeholder='Password'
				returnKeyType={'done'}
				autoCapitalize={'none'}
				autoCorrect={false} />
		</KeyboardAvoidingView>
	);
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	}
});

export default FormSignup;
