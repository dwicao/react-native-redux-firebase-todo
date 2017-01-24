import * as types from './actionTypes';
import { Alert } from 'react-native';
import firebase, {firebaseRef} from '../firebase';


export function fetchTodos(uid) {
  return (dispatch, getState) => {
    const todosRef = firebaseRef.child(`todos/${uid}`);

    return todosRef.once('value').then(snapshot => {
      const todos = snapshot.val() || {};

      Object.keys(todos).map(todoId => {
        const parsedTodos = {
          id: todoId,
          ...todos[todoId]
        };

        dispatch(addTodo(parsedTodos));
      });
    });
  };
}

export function startAddTodo(text) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todo = {
      text,
      isDone: false,
      isStarred: false
    };
    const todoRef = firebaseRef.child(`todos/${UID}`).push(todo);

    dispatch(addTodo({
      id: todoRef.key,
      ...todo
    }));

    todoRef.then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startUpdateTodo(id, key, value) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`todos/${UID}/${id}`);
    let updates = {};
    updates[key] = value;

    dispatch(updateTodo(id, updates));

    todoRef.update(updates).then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startRemoveTodo(id) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`todos/${UID}/${id}`);

    dispatch(removeTodo(id));

    todoRef.remove().then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startSignup(email, password) {
  return (dispatch, getState) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
}

export function startLogin(email, password) {
  return (dispatch, getState) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
}

export function startLogout() {
  return (dispatch, getState) => {
    return firebase.auth().signOut();
  };
}

export function changeEmailLogin(emailLogin) {
  return {
    type: types.CHANGE_EMAIL_LOGIN,
    emailLogin
  }
}

export function changeEmailSignup(emailSignup) {
  return {
    type: types.CHANGE_EMAIL_SIGNUP,
    emailSignup
  }
}

export function changePasswordLogin(passwordLogin) {
  return {
    type: types.CHANGE_PASSWORD_LOGIN,
    passwordLogin
  }
}

export function changePasswordSignup(passwordSignup) {
  return {
    type: types.CHANGE_PASSWORD_SIGNUP,
    passwordSignup
  }
}

export function changeUserData(payload) {
  return {
    type: types.CHANGE_USER_DATA,
    payload
  }
}

export function changeCondition(payload) {
  return {
    type: types.CHANGE_CONDITION,
    payload
  }
}

export function addTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload
  };
}

export function updateTodo(id, payload) {
  return {
    type: types.UPDATE_TODO,
    id,
    payload
  };
}

export function deleteAllTodo() {
  return {
    type: types.DELETE_ALL_TODO
  }
}

export function toggleStarTodo(id) {
  return {
    type: types.TOGGLE_STAR_TODO,
    id
  };
}

export function toggleEditTodo(id) {
  return {
    type: types.TOGGLE_EDIT_TODO,
    id
  }
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text
  };
}

export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
