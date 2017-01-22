import React, { PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Platform,
} from 'react-native';

import ButtonIcon from '../Buttons/ButtonIcon';

const List = props => {
  const {
    todos,
    actions,
    visibleTodos,
    leftOnPress,
    leftUnactiveIcon,
    leftActiveIcon,
    rightOnPress,
    rightUnactiveIcon,
    rightActiveIcon,
    iconDelete,
    onDelete,
    textOnPress,
  } = props;

  const _renderList = (todo, index) => {
    const doneOrNot = todo.isDone ? leftActiveIcon : leftUnactiveIcon;
    const starredOrNot = todo.isStarred ? rightActiveIcon : rightUnactiveIcon;
    const textDoneOrNot = todo.isDone ? styles.textDone : styles.textNotDone;

    const deleteOrStar = () => {
      if (todo.isDone) {
        return <ButtonIcon onPress={onDelete(todo.id)}
                source={iconDelete}
                style={styles.rightButton}
                width={25} height={25} />
      } else {
        return <ButtonIcon onPress={rightOnPress(todo.id, todo.isStarred)}
                source={starredOrNot}
                style={styles.rightButton}
                width={25} height={25} />
      }
    }

    return (
      <View key={index} style={styles.row}>
        <ButtonIcon onPress={leftOnPress(todo.id, todo.isDone)}
          source={doneOrNot}
          style={styles.leftButton}
          width={25} height={25} />
        <TouchableOpacity onPress={textOnPress(todo.id, todo.text)}
          style={styles.textButton}
          activeOpacity={0.7}>
          <Text numberOfLines={1}
            style={textDoneOrNot}>
              { todo.text }
          </Text>
        </TouchableOpacity>
        { deleteOrStar() }
      </View>
    );
  }

  return (
      <ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        { visibleTodos.map(_renderList) }
      </ScrollView>
  );
};

const marginBottom = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: marginBottom,
  },
  textButton: {
    flex: 1,
  },
  textNotDone: {
    color: 'white',
  },
  textDone: {
    color: 'white',
    textDecorationLine: 'line-through',
  },
  leftButton: {
    marginHorizontal: 10,
  },
  rightButton: {
    marginLeft: 5,
    marginRight: 10,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

List.propTypes = {
  style: PropTypes.number,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibleTodos: PropTypes.array.isRequired,
  leftOnPress: PropTypes.func.isRequired,
  leftUnactiveIcon: PropTypes.number.isRequired,
  leftActiveIcon: PropTypes.number.isRequired,
  rightOnPress: PropTypes.func.isRequired,
  rightUnactiveIcon: PropTypes.number.isRequired,
  rightActiveIcon: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  iconDelete: PropTypes.number.isRequired,
  textOnPress: PropTypes.func.isRequired,
};

export default List;
