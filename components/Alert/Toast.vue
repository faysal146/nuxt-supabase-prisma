<template>
	<div
		:class="`alert ${
			props.type === 'success' ? 'alert-success' : 'alert-error'
		} rounded-md px-3 py-2  z-10`"
	>
		<div>
			<span>{{ props.message }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps({
		message: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
			validator(value: "success" | "error") {
				return ["success", "error"].includes(value);
			},
		},
		timeout: {
			type: Number,
			default: 1000,
		},
		toastKey: {
			type: String,
			required: true,
		},
	});
	const emit = defineEmits(["closeToast"]);
	onMounted(() => {
		setTimeout(() => {
			emit("closeToast", props.toastKey);
		}, props.timeout);
	});
</script>
