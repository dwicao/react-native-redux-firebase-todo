import React, { Component, PropTypes } from 'react';
import ButtonLogin from './ButtonLogin';
import FormLogin from './FormLogin';
import Logo from './Logo';
import Wallpaper from '../Wallpaper';

const Login = props => {
	return (
		<Wallpaper>
			<Logo {...props} />
			<FormLogin {...props} />
			<ButtonLogin {...props} />
		</Wallpaper>
	);
}

export default Login;
