import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default configureStore = (onComplete) => {
  const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
  persistStore(store, { storage: AsyncStorage }, onComplete);

  return store;
};
