import React, { Component, PropTypes } from 'react';
import ButtonSubmit from './ButtonSubmit';
import Form from './Form';
import Logo from './Logo';
import SignupSection from './SignupSection';
import Wallpaper from '../Wallpaper';

const LoginUser = props => {
	return (
		<Wallpaper>
			<Logo {...props} />
			<Form {...props} />
			<SignupSection {...props} />
			<ButtonSubmit {...props} />
		</Wallpaper>
	);
}

export default LoginUser;
