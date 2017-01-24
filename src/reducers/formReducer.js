import * as types from '../actions/actionTypes';

const initialState = {
  emailLogin: '',
  emailSignup: '',
  passwordLogin: '',
  passwordSignup: '',
};

export default function formReducer(state = initialState, action) {
  switch(action.type) {

    case types.CHANGE_EMAIL_LOGIN:
      return Object.assign({}, state, { emailLogin: action.emailLogin });

    case types.CHANGE_EMAIL_SIGNUP:
      return Object.assign({}, state, { emailSignup: action.emailSignup });

    case types.CHANGE_PASSWORD_LOGIN:
      return Object.assign({}, state, { passwordLogin: action.passwordLogin });

    case types.CHANGE_PASSWORD_SIGNUP:
      return Object.assign({}, state, { passwordSignup: action.passwordSignup });

    default:
      return state;
  }

}
