import React, { Component, PropTypes } from 'react';
import firebase, {firebaseRef} from '../../firebase';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
	View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ToLogin from './ToLogin';
import spinner from '../../icons/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSignup extends Component {
	constructor() {
		super();

		this.buttonAnimated = new Animated.Value(0);
		this._onPress = this._onPress.bind(this);
	}

	componentDidMount() {
		const { todos, actions, formData, condition } = this.props;
		actions.changeCondition({ isLoading: false });
	}

	componentWillUnmount() {
		const { todos, actions, formData, condition } = this.props;
		actions.changeCondition({ isLoading: false });
		this.buttonAnimated.setValue(0);
		actions.changeEmailLogin('');
		actions.changePasswordLogin('');
	}

	_onPress() {
		const { todos, actions, formData, condition } = this.props;
		const userSignup = actions.startSignup(formData.emailSignup, formData.passwordSignup);

		if (condition.isLoading) return;

		actions.changeCondition({ isLoading: true });
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();

		userSignup
			.then(snapshot => {
				const usersRef = firebaseRef.child('users');
				const todosRef = firebaseRef.child('todos');
				const todo = {
					isDone: false,
					isStarred: false,
					text: `Welcome ${snapshot.email}`
				}

				todosRef.child(snapshot.uid).push(todo);

				usersRef.child(snapshot.uid).set({
					email: formData.emailSignup,
				});

				actions.changeUserData({ email: snapshot.email });
				actions.deleteAllTodo();
				actions.fetchTodos(snapshot.uid);
				Actions.mainScreen();
			}, error => {
				Alert.alert(JSON.stringify(error.message));
				actions.changeCondition({ isLoading: false });
				this.buttonAnimated.setValue(0);
			});
	}

	render() {
		const { todos, actions, formData, condition } = this.props;

		const changeWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
	  });

		return (
			<View style={styles.container}>
				<Animated.View style={{width: changeWidth}}>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							{condition.isLoading ?
								<Image source={spinner} style={styles.image} />
								:
								<Text style={styles.text}>REGISTER</Text>
							}
					</TouchableOpacity>
				</Animated.View>
				<ToLogin {...this.props} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -10,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E7BCAA',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 1,
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
});
