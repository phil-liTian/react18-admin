import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import global from './modules/global/reducer';
import menu from './modules/menu/reducer';
import breadcrumb from './modules/breadcrumb/reducer';
import tabs from './modules/tabs/reducer';
import auth from './modules/auth/reducer';

const reducer = combineReducers({
	global,
	menu,
	breadcrumb,
	tabs,
	auth
});

const persistConfig = {
	key: 'redux-state',
	storage: storage,
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

// 创建store
const store = createStore(persistReducerConfig);

// 创建持久化 store
export const persistor = persistStore(store);

export default store;
