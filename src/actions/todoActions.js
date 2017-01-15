import * as types from './actionTypes';

// generate unique id
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: uid(),
      isDone: false,
      isEditing: false,
      isStarred: false,
      text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  };
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
