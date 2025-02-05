export interface ThemeConfigProp {
	isDark: boolean;
}

// global
export interface GlobalState {
	token: string;
	language: string;
	themeConfig: ThemeConfigProp;
}

// auth

export interface AuthState {}
