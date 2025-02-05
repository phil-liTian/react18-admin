import { legacy_createStore as createStore, combineReducers } from 'redux';
import global from './modules/global/reducer';

const reducer = combineReducers({
	global
});

const store = createStore(reducer);

export default store;
