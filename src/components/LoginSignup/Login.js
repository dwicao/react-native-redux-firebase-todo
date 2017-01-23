import React from 'react';
import ButtonLogin from './ButtonLogin';
import FormLogin from './FormLogin';
import Logo from './Logo';
import Container from '../Container';

const Login = props => {
	return (
		<Container>
			<Logo />
			<FormLogin />
			<ButtonLogin />
		</Container>
	);
}

export default Login;
