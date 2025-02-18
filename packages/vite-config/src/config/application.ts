/*
 * @author: phil.li
 */
/*
 * @author: phil.li
 */
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface DefineConfig {
	overrides?: UserConfig; // 可覆盖当前配置
}

export function defineApplicationConfig(config: DefineConfig = {}) {
	return defineConfig({
		plugins: [react()],
		server: {
			open: true
		},
		// test: {
		// 	globals: true,
		// 	environment: 'happy-dom',
		// 	include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
		// },
		resolve: {
			alias: {
				'@': '/src',
				'@c': '/src/components',
				'@a': '/src/assets',
				'@h': '/src/hooks',
				'@r': '/src/routers',
				'@v': '/src/views',
				'@api': '/src/api',
				'@u': '/src/utils'
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true
					// additionalData: `@import "./src/styles/var.less";`
				}
			}
		},
		...config.overrides // 可覆盖当前配置
	});
}
