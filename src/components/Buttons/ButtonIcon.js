import React, { PropTypes } from 'react';
import {
	View,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';

const ButtonIcon = props => {
	const {
		style,
		onPress,
		source,
		width,
		height,
	} = props;

	const _onPress = () => onPress();

	return (
		<View style={style}>
			<TouchableWithoutFeedback onPress={_onPress}
				hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
				<Image source={source} style={{width, height}} />
			</TouchableWithoutFeedback>
		</View>
	);
};

ButtonIcon.propTypes = {
	style: PropTypes.number,
	onPress: PropTypes.func.isRequired,
	source: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default ButtonIcon;