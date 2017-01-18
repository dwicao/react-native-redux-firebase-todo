import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import * as todoActions from '../../actions/todoActions';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Platform,
} from 'react-native';

import LoginUser from '../LoginUser';

class LoginScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LoginUser {...this.props}/>
			</View>
		);
	}
}

const statusbarTop = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: statusbarTop,
	}
});

LoginScreen.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		todos: state.todos,
		visibilityFilter: state.visibilityFilter,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
