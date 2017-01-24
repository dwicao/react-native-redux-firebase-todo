import * as types from '../actions/actionTypes';

export default function userDataReducer(state = {}, action) {
  switch(action.type) {

    case types.CHANGE_USER_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}
