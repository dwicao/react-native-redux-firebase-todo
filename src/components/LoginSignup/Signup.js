import React, { Component, PropTypes } from 'react';
import ButtonSignup from './ButtonSignup';
import FormSignup from './FormSignup';
import Logo from './Logo';
import Container from '../Container';

const Signup = props => {
	return (
		<Container>
			<Logo {...props} />
			<FormSignup {...props} />
			<ButtonSignup {...props} />
		</Container>
	);
}

export default Signup;
