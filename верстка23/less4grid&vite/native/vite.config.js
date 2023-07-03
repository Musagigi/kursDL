import { defineConfig } from "vite";
const { resolve } = require('path')


export default defineConfig({
	root: './src',
	build: {
		outDir: './../dist', //  путь относительно root
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve('./src/index.html'),
				nested: resolve('./src/pages/posts.html')
			}
		}
	},
	publicDir: './../public'
})