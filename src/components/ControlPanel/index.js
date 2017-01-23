import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Container from '../Container';

const ControlPanel = props => {
  const _onPress = () => Alert.alert('YAYAYA');

  return (
    <Container wallpaper={false} style={styles.container}>
      <TouchableOpacity onPress={_onPress} style={styles.button}>
        <Text>COBA!</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
  },
});

export default ControlPanel;
