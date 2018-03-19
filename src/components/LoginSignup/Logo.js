import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../../images/logo.png';

const Logo = props => {
	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.image} />
			<Text style={styles.text}>MY TODO</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});

export default Logo;
