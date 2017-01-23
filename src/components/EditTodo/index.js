import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';

import backIcon from '../../icons/back.png';

const EditTodo = props => {
	const {
		todos,
		actions,
		id,
		text
	} = props;

	let textValue = text;

	const _onPress = () => {
		actions.editTodo(id, textValue);
		actions.startUpdateTodo(id, 'text', textValue);
		Actions.mainScreen({type: ActionConst.RESET});
	}

	const _onChangeText = value => textValue = value;

	return (
		<View style={styles.container}>
			<View style={styles.textInputWrapper}>
				<TextInput style={styles.textInput}
					onChangeText={_onChangeText}
					autoCapitalize='none'
					maxLength={200}
					autoCorrect={false}
					multiline={true}>
						<Text style={styles.text}>{text}</Text>
				</TextInput>
			</View>
			<View style={styles.btnWrapper}>
				<TouchableOpacity onPress={_onPress}
					activeOpacity={0.5}
					style={styles.btn}>
						<Image source={backIcon} style={styles.image}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInputWrapper: {
		marginTop: 20,
		marginHorizontal: 15,
	},
	textInput: {
		height: 100,
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	btnWrapper: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	btn: {
		margin: 20,
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	image: {
		width: 40,
		height: 40,
	},
});

export default EditTodo;
