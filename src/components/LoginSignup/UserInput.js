import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
} from 'react-native';

const UserInput = props => {
  const {
    source,
    placeholder,
    secureTextEntry,
    autoCorrect,
    autoCapitalize,
    returnKeyType,
		onChangeText,
		value,
  } = props;

  return (
		<View style={styles.inputWrapper}>
			<Image source={source}
				style={styles.inlineImg} />
			<TextInput style={styles.input}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				autoCorrect={autoCorrect}
				autoCapitalize={autoCapitalize}
				returnKeyType={returnKeyType}
				value={value}
				placeholderTextColor='white'
				underlineColorAndroid='transparent' />
		</View>
	);
}

UserInput.propTypes = {
	source: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
	onChangeText: PropTypes.func,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 0,
		marginBottom: 10,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});

export default UserInput;
