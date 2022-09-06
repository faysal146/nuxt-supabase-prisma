<template>
	<NuxtLayout name="with-header">
		<section class="max-w-md mx-auto bg-base-300 rounded-md p-6 mt-10 mb-10">
			<div class="space-y-4 mb-3">
				<h2 class="text-3xl">Log in</h2>
				<p class="text-sm">Enter your credentials to access your account</p>
			</div>
			<form @submit.prevent="onSubmit" class="space-y-4">
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						v-model="inputData.email"
						type="text"
						placeholder="user@example.com"
						class="input input-bordered w-full block"
					/>
					<p v-show="errorsData.email" class="text-warning text-sm capitalize mt-1 pl-2">
						{{ errorsData.email }}
					</p>
				</div>
				<div class="form-control w-full relative">
					<label class="label">
						<span class="label-text">Password</span>
					</label>
					<input
						v-model="inputData.password"
						:type="showPassword ? 'text' : 'password'"
						placeholder="********"
						class="input input-bordered w-full block"
					/>
					<p class="text-warning text-sm capitalize mt-1 pl-2" v-show="errorsData.password">
						{{ errorsData.password }}
					</p>
					<button
						type="button"
						@click="showPassword = !showPassword"
						class="absolute right-[10px] top-[45px]"
					>
						<svg
							v-if="!showPassword"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-2 -6 24 24"
							width="24"
							fill="currentColor"
						>
							<path
								d="M10 12c-5.042.007-10-2.686-10-6S4.984-.017 10 0c5.016.017 10 2.686 10 6s-4.958 5.993-10 6zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
							></path>
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-2 -2 24 24"
							width="24"
							fill="currentColor"
						>
							<path
								d="M9.329 11.885L2.12 19.092a1 1 0 1 1-1.414-1.414l7.324-7.324a2 2 0 0 1 2.322-2.322L17.679.706a1 1 0 0 1 1.414 1.414L11.885 9.33a2 2 0 0 1-2.556 2.556zm7.54-6.127C18.75 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.734 14.734 0 0 1-3.053-.32l1.861-1.86a4 4 0 0 0 5.011-5.011l3.05-3.051zm-4.16-1.496l-1.834 1.834a4 4 0 0 0-4.779 4.779L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6 .914.003 1.827.094 2.709.262z"
							></path>
						</svg>
					</button>
				</div>
				<p>
					<NuxtLink class="text-sm font-bold underline" to="/forget-password">
						Forget Password
					</NuxtLink>
				</p>
				<button
					type="submit"
					:disabled="loading"
					:class="`btn btn-primary btn-block ${loading && 'loading'}`"
				>
					Login
				</button>
				<p>
					Don't have an account ?
					<NuxtLink to="/register" class="underline text-info">Create Account</NuxtLink>
				</p>
			</form>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	import { validateEmail, validatePassword } from "~/helpers/validate";
	import { useAuthStore } from "~~/store/user.store";

	const showPassword = ref(false);
	const loading = ref(false);

	const inputData = ref({ email: "", password: "" });
	const errorsData = ref({ email: "", password: "" });

	const hasError = computed(() => {
		return Object.values(errorsData.value).some(val => val !== "");
	});

	const supabaseClient = useSupabaseClient();
	const authUser = useAuthStore();
	const toast = useToast();
	const router = useRouter();

	async function onSubmit() {
		const { email, password } = inputData.value;
		errorsData.value.email = validatePassword(email);
		errorsData.value.password = validatePassword(password);
		if (!hasError.value && !loading.value) {
			loading.value = true;
			try {
				const { user, error } = await supabaseClient.auth.signIn({
					email,
					password,
				});
				if (error === null && user) {
					loading.value = false;

					toast.addToast({
						message: "successfully logged in",
						type: "success",
						timeout: 2000,
					});
					authUser.setUser(user);
					router.replace("/profile");
				} else {
					throw error;
				}
			} catch (error) {
				loading.value = false;
				toast.addToast({
					message: error.message,
					type: "error",
					timeout: 2000,
				});
			}
		}
	}

	watch(
		() => inputData.value.email,
		email => {
			errorsData.value.email = validateEmail(email);
		}
	);

	watch(
		() => inputData.value.password,
		password => {
			errorsData.value.password = validatePassword(password);
		}
	);
</script>
