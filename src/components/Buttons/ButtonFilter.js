import React, { PropTypes } from 'react';
import {
	TouchableOpacity,
	Text,
} from 'react-native';

const ButtonFilter = props => {
	const {
		children,
		todos,
		actions,
		visibilityFilter,
		filter,
		txtStyle,
		activeOpacity,
		activeStyle,
		UnactiveStyle,
	} = props;

	const _onPress = () => actions.setVisibilityFilter(filter);
	const activeOrNot = (filter === visibilityFilter) ? activeStyle : UnactiveStyle;

	return (
		<TouchableOpacity activeOpacity={activeOpacity}
			onPress={_onPress} style={activeOrNot}>
				<Text style={txtStyle}>
					{children}
				</Text>
		</TouchableOpacity>
	);
};

ButtonFilter.propTypes = {
	todos: PropTypes.array,
	actions: PropTypes.object.isRequired,
	visibilityFilter: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	txtStyle: PropTypes.number,
	activeOpacity: PropTypes.number,
	activeStyle: PropTypes.number.isRequired,
	UnactiveStyle: PropTypes.number.isRequired,
};

export default ButtonFilter;