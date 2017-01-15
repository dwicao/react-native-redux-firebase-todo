import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
//import {autoRehydrate} from 'redux-persist'

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( thunk ),
  );
}
