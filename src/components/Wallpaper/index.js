import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import {
	StyleSheet,
	Image,
	Platform
} from 'react-native';

import bgSrc from '../../images/bg.jpg';

class Wallpaper extends Component {
	render() {
		const {
			children,
			todos,
			actions,
			formData,
			visibilityFilter,
		} = this.props;

		const renderChildren = Array.isArray(children) ?
			children.map((child, key) => React.cloneElement(child, {
				key,
				todos,
				actions,
				formData,
				visibilityFilter,
			}))
			:
			React.cloneElement(children, {
				todos,
				actions,
				formData,
				visibilityFilter,
			});

		return (
			<Image style={styles.picture} source={bgSrc}>
				{renderChildren}
			</Image>
		);
	}
}

const statusbarTop = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
		top: statusbarTop,
	},
});

Wallpaper.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	formData: PropTypes.object.isRequired,
	visibilityFilter: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		todos: state.todos,
		formData: state.formData,
		visibilityFilter: state.visibilityFilter,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallpaper);
