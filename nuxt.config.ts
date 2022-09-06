import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		[
			"@pinia/nuxt",
			{
				autoImports: [
					// automatically imports `defineStore`
					"defineStore", // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
				],
			},
		],
	],
	buildModules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			"Source Sans Pro": {
				wght: [300, 400, 600],
			},
		},
		download: true,
		inject: true,
		overwriting: false,
		outputDir: "./assets",
		stylePath: "css/fonts.css",
		fontsDir: "fonts",
	},
	runtimeConfig: {
		// The private keys which are only available within server-side
		supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
		// Keys within public, will be also exposed to the client-side
		public: {
			supabase: {
				url: process.env.SUPABASE_URL,
				key: process.env.SUPABASE_KEY,
			},
		},
	},
});
