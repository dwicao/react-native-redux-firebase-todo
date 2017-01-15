import * as types from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
  switch(action.type) {

    case types.ADD_TODO:
      return [
        action.payload,
        ...state
      ];

    case types.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isDone: !todo.isDone });
      });

    case types.EDIT_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, { text: action.text });
      });

    case types.TOGGLE_STAR_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isStarred: !todo.isStarred });
      });

    case types.TOGGLE_EDIT_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isEditing: !todo.isEditing });
      });

    case types.REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });

    case types.FILTER_TODO:
      return state.filter(todo => {
        return todo.visibilityFilter === action.filter;
      });

    default:
      return state;
  }

}

export default todoReducer;