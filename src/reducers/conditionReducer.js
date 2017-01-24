import * as types from '../actions/actionTypes';

export default function conditionReducer(state = {}, action) {
  switch(action.type) {

    case types.CHANGE_CONDITION:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}
