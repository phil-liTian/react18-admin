import { describe, expect, test } from "vitest";
import { findAllBreadcrumb, handleRouter, searchRoute } from '../util'
import { is, isFunction } from "../is";

const routes = [
	{
		icon: 'HomeOutlined',
		title: '首页',
		path: '/home/index'
	},
	{
		icon: 'TableOutlined',
		title: '超级表格',
		path: '/proTable',
		children: [
			{
				icon: 'AppstoreOutlined',
				path: '/proTable/useHooks',
				title: '使用 Hooks'
			},
			{
				icon: 'AppstoreOutlined',
				path: '/proTable/useComponent',
				title: '使用 Component'
			}
		]
	}
];

describe('util', () => {
	test('handleRouter', () => {
		expect(handleRouter([])).toStrictEqual([]);

		expect(handleRouter(routes)).toStrictEqual([
			'/home/index',
			'/proTable',
			'/proTable/useHooks',
			'/proTable/useComponent'
		]);
	});

	test('searchRoute', () => {
		expect(searchRoute('/proTable/useComponent', routes)).toStrictEqual({
			icon: 'AppstoreOutlined',
			path: '/proTable/useComponent',
			title: '使用 Component'
		});
	});

	test('findAllBreadcrumb', () => {
		expect(findAllBreadcrumb(routes)).toStrictEqual({
			'/home/index': ['首页'],
			'/proTable/useComponent': ['超级表格', '使用 Component'],
			'/proTable/useHooks': ['超级表格', '使用 Hooks']
		});
	});

	describe('is', () => {
		test('isFunction', () => {
			expect(isFunction(() => {})).toBeTruthy();
		});

		test('is', () => {
			expect(is('1', 'String')).toBeTruthy();
		})

		test('isObject', () => {
			expect(is({}, 'Object')).toBeTruthy();
		});
	});

});