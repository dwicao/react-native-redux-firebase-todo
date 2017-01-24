import {combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';
import formData from './formReducer';
import userData from './userDataReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  formData,
  userData,
});

export default rootReducer;
