<template>
	<NuxtPage />
	<Teleport to="body">
		<template v-if="toast.toastList.value.length > 0">
			<div class="toast toast-top toast-end z-10">
				<AlertToast
					v-for="tst in toast.toastList.value"
					:message="tst.message"
					:type="tst.type"
					:timeout="tst.timeout"
					:key="tst.key"
					:toastKey="tst.key"
					@close-toast="toast.removeToast"
				/>
			</div>
		</template>
	</Teleport>
</template>

<script setup lang="ts">
	useTheme();
	useHead({
		title: "Nuxt App",
		// titleTemplate: (title) => `My App - ${title}`,
		viewport: "width=device-width, initial-scale=1, maximum-scale=1",
		charset: "utf-8",
		meta: [{ name: "description", content: "My amazing site." }],
		link: [],
	});
	const toast = useToast();
	const supabase = useSupabaseClient();
</script>
