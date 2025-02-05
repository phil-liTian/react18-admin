import { produce } from 'immer';
import { GlobalState } from '../../interface/index';
import * as types from '../../mutation-types';

const globalState = {
	themeConfig: {
		isDark: true
	}
};

const global = (state: GlobalState = globalState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			// case types.SET_DARK_MODE:

			// 	break;
			case types.SET_THEME_CONFIG: {
				draftState.themeConfig = action.themeConfig;
				break;
			}

			default:
				return draftState;
		}
	});

export default global;
