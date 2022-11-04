import { defineConfig } from "vite";
import { normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteEslint from "vite-plugin-eslint";
import StylelintPlugin from "vite-plugin-stylelint";

const variablePath = normalizePath(path.resolve("./src/assets/style/variable.less"));

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5000,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "${variablePath}";`
			},
		}
	},
	plugins: [
		vue(),
		viteEslint(),
		StylelintPlugin()
	]
});
