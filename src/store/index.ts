import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './menu/reducer';
import tabsReducer from './tabs/redcer'
const allReducers = combineReducers({ menuReducer,tabsReducer });
const store = createStore(allReducers, applyMiddleware(thunk));
export const dispatch = store.dispatch;
export default store;
