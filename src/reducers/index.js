import {combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';
import formData from './formReducer';
import userData from './userDataReducer';
import condition from './conditionReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  formData,
  userData,
  condition,
});

export default rootReducer;
