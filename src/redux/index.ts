import { legacy_createStore as createStore, combineReducers } from 'redux';
import global from './modules/global/reducer';
import menu from './modules/menu/reducer';

const reducer = combineReducers({
	global,
	menu
});

const store = createStore(reducer);

export default store;
