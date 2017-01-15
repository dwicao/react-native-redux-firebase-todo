import {combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;
