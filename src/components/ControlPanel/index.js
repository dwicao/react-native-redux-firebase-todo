import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ControlPanel = props => {
  const _onPress = () => Alert.alert('YAYAYA');

  return (
      <TouchableOpacity onPress={_onPress} style={styles.button}>
        <Text>COBA!</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
  },
});

export default ControlPanel;
