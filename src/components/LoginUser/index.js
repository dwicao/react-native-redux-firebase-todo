import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginUser = props => {
  const {
    todos,
    actions,
  } = props;

  const _onPress = () => {
    actions.startLogin('test@example.com', '12345678');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress} >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginUser;
