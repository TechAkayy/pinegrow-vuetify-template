import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import { liveDesigner } from '@pinegrow/vite-plugin'
import { pinegrowVuetifyPlugin } from "@pinegrow/vuetify-plugin";
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		liveDesigner({
			plugins: [pinegrowVuetifyPlugin],
			iconsets: ['all']
		}),
		vue(),
		Unocss({
			presets: [
				presetIcons({
					prefix: '' // to override the default prefix 'i' added by icones (used in vue-designer's icon-picker)
				})
			]
		}),
		vuetify({ autoImport: true }),
		Components({
			dirs: ['src/components']
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
