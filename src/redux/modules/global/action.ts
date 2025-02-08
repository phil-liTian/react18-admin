import { ThemeConfigProp } from '@/redux/interface';
import * as types from '../../mutation-types';

export const setThemeConfig = (themeConfig: ThemeConfigProp) => {
	return {
		type: types.SET_THEME_CONFIG,
		themeConfig
	};
};

export const setAssemblySize = (assemblySize: string) => {
	return {
		type: types.SET_ASSEMBLY_SIZE,
		assemblySize
	};
};

export const setLanguage = (language: string) => {
	return {
		type: types.SET_LANGUAGE,
		language
	};
};

export const setToken = (token: string) => {
	return {
		type: types.SET_TOKEN,
		token
	};
};
