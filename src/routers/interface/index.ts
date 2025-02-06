export interface RouteObject {
	path?: string;
	index?: false;
	element?: React.ReactNode;
	children?: RouteObject[];
}
