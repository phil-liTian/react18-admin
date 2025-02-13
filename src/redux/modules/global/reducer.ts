import { produce } from 'immer';
import { GlobalState } from '../../interface/index';
import * as types from '../../mutation-types';

const globalState = {
	token: '',
	language: 'zh',
	assemblySize: 'middle',
	themeConfig: {
		isDark: false,
		breadcrumb: true,
		weakOrGray: "",
		tabs: false,
		footer: false
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
			// assemblySize
			case types.SET_ASSEMBLY_SIZE: {
				draftState.assemblySize = action.assemblySize
				break
			}
			// language
			case types.SET_LANGUAGE: {
				draftState.language = action.language
				break
			}
			case types.SET_TOKEN: {
				draftState.token = action.token
				break
			}
			default:
				return draftState;
		}
	});

export default global;
