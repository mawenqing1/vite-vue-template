import { defineConfig } from 'vite';
import { normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const variablePath = normalizePath(path.resolve('./src/assets/variable.less'));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
		port: 5000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
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
  plugins: [vue()]
})
