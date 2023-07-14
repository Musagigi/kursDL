import { defineConfig } from "vite";
const { resolve } = require('path')


export default defineConfig({
	root: './src',
	base: '',
	build: {
		outDir: './../dist', //  путь относительно root
		emptyOutDir: true,
		rollupOptions: {
			// input: {
			main: resolve('./src/index.html'),
			// }
		}
	},
	publicDir: './../public',
})
