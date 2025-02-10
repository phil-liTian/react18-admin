export interface ThemeConfigProp {
	isDark: boolean;
	breadcrumb: boolean;
	// "weak" | "gray" | ""
	weakOrGray: string
}

// global
export interface GlobalState {
	token: string;
	language: string;
	assemblySize: string;
	themeConfig: ThemeConfigProp;
}

// auth
export interface AuthState {
	authRouter: string[],
	authButtons: Object
}


// menu
export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[]
}

// breadcrumb
export interface BreadcrumbState {
	breadcrumbList: Menu.MenuOptions[];
}

// tabs
export interface TabsState {
	tabsList: Menu.MenuOptions[];
	tabsActive: string
}
