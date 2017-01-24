import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '../Container';
import ControlPanel from '../ControlPanel';

const MenuScreen = props =>  {
		return (
				<Container wallpaper={false} style={styles.container}>
					<ControlPanel {...props} />
				</Container>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default MenuScreen;
