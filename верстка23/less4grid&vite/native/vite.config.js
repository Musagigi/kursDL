import { defineConfig } from "vite";

export default defineConfig({
	root: './src',
	build: {
		outDir: './../dist', //  путь относительно root
		emptyOutDir: true
	},
	publicDir: './../public'
})