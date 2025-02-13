export interface RouteObject {
	path?: string;
	index?: false;
	element?: React.ReactNode;
	children?: RouteObject[];
	meta?: MetaProps;
	isLink?: string;
}

export interface MetaProps {
	title: string;
	requiresAuth?: boolean;
	key?: string;
}
