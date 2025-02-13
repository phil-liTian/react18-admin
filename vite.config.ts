import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		// 配置测试文件的匹配模式
		include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
	},
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
	}
});
