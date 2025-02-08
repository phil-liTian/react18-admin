import { legacy_createStore as createStore, combineReducers } from 'redux';
import global from './modules/global/reducer';
import menu from './modules/menu/reducer';
import breadcrumb from './modules/breadcrumb/reducer';

const reducer = combineReducers({
	global,
	menu,
	breadcrumb
});

const store = createStore(reducer);

export default store;
