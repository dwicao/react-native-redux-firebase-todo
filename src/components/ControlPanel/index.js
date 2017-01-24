import React, { PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Platform,
} from 'react-native';
import logoSrc from '../../images/logo.png';

const ControlPanel = props => {
  const _onPress = () => Alert.alert('YAYAYA');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoSrc} />
      <Text style={styles.header}>
        Have a nice day,{'\n'}
        {props.userData.email}
      </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={_onPress} style={styles.buttonLogout}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const bottomSpace = (Platform.OS === 'ios') ? 20 : 0;
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    width: 80,
    height: 80,
  },
  header: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    marginBottom: bottomSpace,
    justifyContent: 'flex-end',
  },
  buttonLogout: {
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE_WIDTH * 0.7,
    height: 40,
    borderTopWidth: 1,
    borderColor: '#cccccc',
  },
  logoutText: {
    textAlign: 'center',
    color: 'black',
    letterSpacing: 1,
  }
});

export default ControlPanel;
