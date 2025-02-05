import * as types from '../../mutation-types';

export const setThemeConfig = (themeConfig: ThemeConfigProp) => {
	return {
		type: types.SET_THEME_CONFIG,
		themeConfig
	};
};
