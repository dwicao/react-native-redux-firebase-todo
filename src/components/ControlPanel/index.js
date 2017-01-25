import React, { PropTypes } from 'react';
import Dimensions from 'Dimensions';
import { Actions, ActionConst } from 'react-native-router-flux';
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
  const {
    todos,
    actions,
    formData,
    userData,
  } = props;

  const _onPress = () => {
    actions.startLogout().then(() => {
      actions.changeUserData({ email: null });
      Actions.loginScreen({ type: ActionConst.RESET });
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };

  const _getActiveTodo = () => {
    let totalActiveTodo = 0;

    todos.map(todo => {
      if (!todo.isDone) {
        totalActiveTodo++;
      }
    });

    return totalActiveTodo;
  }

  const _getCompletedTodo = () => {
    let totalCompletedTodo = 0;

    todos.map(todo => {
      if (!!todo.isDone) {
        totalCompletedTodo++;
      }
    });

    return totalCompletedTodo;
  }

  const _getFavoritedTodo = () => {
    let totalFavoritedTodo = 0;

    todos.map(todo => {
      if (!!todo.isStarred) {
        totalFavoritedTodo++;
      }
    });

    return totalFavoritedTodo;
  }

  const _getTotalTodos = () => {
    return todos.length;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoSrc} />
      <Text style={styles.logoDescription}>
        My Todo
      </Text>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>
          Have a nice day,{'\n'}
          {props.userData.email}
        </Text>
      </View>
      <View style={styles.statsWrapper}>
        <Text style={styles.statsHeader}>
          Statistics
        </Text>
        <Text style={styles.stats}>
          {`${_getActiveTodo()} Active\n`}
        </Text>
        <Text style={styles.stats}>
          {`${_getCompletedTodo()} Completed\n`}
        </Text>
        <Text style={styles.stats}>
          {`${_getFavoritedTodo()} Favorited\n`}
        </Text>
        <Text style={[styles.stats, styles.statsLastChild]}>
          {`${_getTotalTodos()} Total Todos\n`}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={_onPress}
          activeOpacity={0.7}
          style={styles.buttonLogout}>
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
  logoDescription: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  headerWrapper: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderColor: 'white',
    width: DEVICE_WIDTH * 0.6,
  },
  header: {
    marginTop: 20,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  statsWrapper: {
    marginTop: 20,
    marginBottom: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    width: DEVICE_WIDTH * 0.6,
    alignItems: 'center',
  },
  statsHeader: {
    marginVertical: 10,
    fontSize: 22,
    color: 'white',
  },
  stats: {
    alignSelf: 'flex-start',
    color: 'white',
    textAlign: 'left',
  },
  statsLastChild: {
    marginBottom: 10,
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
    borderLeftWidth: 3,
    borderColor: '#D25740',
    backgroundColor: '#cccccc',
  },
  logoutText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    letterSpacing: 1,
  }
});

export default ControlPanel;
