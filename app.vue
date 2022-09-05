<template>
	<NuxtPage />
	<Teleport to="body">
		<template v-if="toast.toastList.value.length > 0">
			<div class="toast toast-top toast-end">
				<Toast
					v-for="tst in toast.toastList.value"
					:message="tst.message"
					:type="tst.type"
					:timeout="tst.timeout"
					:key="tst.key"
					:toastKey="tst.key"
					@close-toast="toast.removeToast"
				/>
				<!-- @close-toast="toast.hideToast()" -->
			</div>
		</template>
	</Teleport>
</template>

<script setup lang="ts">
	import Toast from "~/components/Alert/Toast.vue";
	import { useToast } from "~/composables/useToast";
	import { createClient } from "@supabase/supabase-js";

	const toast = useToast();

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

	const { supabase } = useRuntimeConfig().public;
	const client = createClient(supabase.url, supabase.key);
	provide("supabaseClient", client);
</script>
