<template>
	<NuxtLayout name="with-header"> </NuxtLayout>
</template>

<script setup lang="ts">
	const supabase = useSupabaseClient();
	const user = supabase.auth.user();
	console.log(user);
	// supabase.
</script>
