import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import reduxPromise from 'redux-promise'
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

// 开启 redux-devtools
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxPromise);

const persistReducerConfig = persistReducer(persistConfig, reducer);

// 创建store
const store: Store = createStore(
	persistReducerConfig,
	composeEnhancers(middleWares)
);

// 创建持久化 store
export const persistor = persistStore(store);

export default store;
