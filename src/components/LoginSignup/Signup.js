import React, { Component, PropTypes } from 'react';
import ButtonSignup from './ButtonSignup';
import FormSignup from './FormSignup';
import Logo from './Logo';
import Wallpaper from '../Wallpaper';

const Signup = props => {
	return (
		<Wallpaper>
			<Logo {...props} />
			<FormSignup {...props} />
			<ButtonSignup {...props} />
		</Wallpaper>
	);
}

export default Signup;
