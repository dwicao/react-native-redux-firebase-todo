import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import iconSrc from '../../icons/open_menu.png';

const TopBar = props => {
  const {
    onPress,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Todo
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.button}
      >
        <Image source={iconSrc} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  }
});

export default TopBar;
