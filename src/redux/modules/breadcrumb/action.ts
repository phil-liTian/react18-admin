
import * as types from '../../mutation-types';

export const setBreadcrumbList = (breadcrumbList: { [propName: string]: any }) => {
	return {
		type: types.SET_BREADCRUMB_LIST,
		breadcrumbList
	};
};
