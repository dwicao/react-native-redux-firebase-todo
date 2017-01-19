import React, { Component, PropTypes } from 'react';
import ButtonLogin from './ButtonLogin';
import Form from './Form';
import Logo from './Logo';
import Wallpaper from '../Wallpaper';

const Login = props => {
	return (
		<Wallpaper>
			<Logo {...props} />
			<Form {...props} />
			<ButtonLogin {...props} />
		</Wallpaper>
	);
}

export default Login;
