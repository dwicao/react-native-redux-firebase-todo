import {combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';
import formData from './formReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  formData,
});

export default rootReducer;
