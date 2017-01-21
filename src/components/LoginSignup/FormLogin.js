import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Platform,
} from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../icons/username.png';
import passwordImg from '../../icons/password.png';

const behavior = (Platform.OS === 'ios') ? 'position' : 'padding';

const FormLogin = props => {
	const {
		todos,
		actions,
		formData,
	} = props;

	const _onChangeEmailLogin = value => {
		actions.changeEmailLogin(value);
	};

	const _onChangePasswordLogin = value => {
		actions.changePasswordLogin(value);
	};

	return (
		<KeyboardAvoidingView behavior={behavior}
			style={styles.container}>
			<UserInput source={usernameImg}
				onChangeText={_onChangeEmailLogin}
				value={formData.emailLogin}
				placeholder='Email'
				autoCapitalize={'none'}
				returnKeyType={'done'}
				autoCorrect={false} />
			<UserInput source={passwordImg}
				onChangeText={_onChangePasswordLogin}
				value={formData.passwordLogin}
				secureTextEntry={true}
				placeholder='Password'
				returnKeyType={'done'}
				autoCapitalize={'none'}
				autoCorrect={false} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	}
});

export default FormLogin;
