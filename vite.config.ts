import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true
	},
	resolve: {
		alias: {
			'@': '/src',
			'@c': '/src/components',
			'@a': '/src/assets',
			'@h': '/src/hooks',
			'@r': '/src/routers',
			'@v': '/src/views'
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
