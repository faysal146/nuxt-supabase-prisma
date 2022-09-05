import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
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
