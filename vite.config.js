import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import { liveDesigner } from '@pinegrow/vite-plugin'
import { pinegrowVuetifyPlugin } from "@pinegrow/vuetify-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		liveDesigner({
			plugins: [pinegrowVuetifyPlugin]
		}),
		vue(),
		vuetify({ autoImport: true })
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
