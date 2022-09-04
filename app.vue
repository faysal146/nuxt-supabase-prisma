<template>
	<NuxtPage />
</template>

<script setup lang="ts">
	import { useHead } from "nuxt/app";

	useTheme();

	useHead({
		title: "Nuxt App",
		// titleTemplate: (title) => `My App - ${title}`,
		viewport: "width=device-width, initial-scale=1, maximum-scale=1",
		charset: "utf-8",
		meta: [{ name: "description", content: "My amazing site." }],
		link: [
			//
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap",
			},
		],
	});
</script>
