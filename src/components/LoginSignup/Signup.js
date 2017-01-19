import React, { Component, PropTypes } from 'react';
import ButtonSignup from './ButtonSignup';
import Form from './Form';
import Logo from './Logo';
import Wallpaper from '../Wallpaper';

const Signup = props => {
	return (
		<Wallpaper>
			<Logo {...props} />
			<Form {...props} />
			<ButtonSignup {...props} />
		</Wallpaper>
	);
}

export default Signup;
