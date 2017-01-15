import * as types from '../actions/actionTypes';

export default function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {

    case types.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }

}
