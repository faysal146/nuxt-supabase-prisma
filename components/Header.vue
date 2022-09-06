<template>
	<header class="px-4 py-2">
		<div class="navbar bg-base-300 rounded-md">
			<div class="flex-1">
				<NuxtLink to="/" class="normal-case text-xl text-green-400 font-bold ml-2">
					Nuxt App
				</NuxtLink>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal p-0 font-bold base-content items-center flex space-x-3">
					<template v-if="user.hasUser">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-3 -2 24 24"
								width="24"
								fill="currentColor"
							>
								<path
									d="M18 17H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17zM6.17 18h5.66a3.001 3.001 0 0 1-5.66 0z"
								></path>
							</svg>
						</span>
						<button
							class="dropdown dropdown-end rounded-md py-1 px-2 min-w-[100px] flex justify-center bg-primary text-primary-content"
						>
							<div class="flex items-center space-x-2">
								<p class="inline-block font-bold capitalize">
									{{ user.currentUser.user_metadata.name }}
								</p>
								<div class="flex space-x-1 items-center">
									<div class="avatar" tabindex="0">
										<div class="w-10 mask mask-hexagon">
											<img src="https://placeimg.com/192/192/people" />
										</div>
									</div>
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-chevron-down"
										>
											<polyline points="6 9 12 15 18 9" />
										</svg>
									</span>
								</div>
							</div>
							<ul
								tabindex="0"
								class="menu dropdown-content p-2 shadow w-52 mt-12 bg-primary text-primary-content rounded-md"
							>
								<li class="block"><NuxtLink to="/profile">Profile</NuxtLink></li>
								<li class="block">
									<NuxtLink to="/change-password">Change Password</NuxtLink>
								</li>
								<li class="block"><button class="w-full">Logout</button></li>
							</ul>
						</button>
					</template>
					<template v-else>
						<li>
							<NuxtLink to="/login">Login</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/register">Register</NuxtLink>
						</li>
					</template>
					<!-- dark:bg-neutral dark:hover:bg-neutral-focus -->
					<li>
						<button @click="toggleTheme()" class="theme-toggle-btn">
							<svg
								class="swap-off fill-current w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								v-if="!theme.isDark.value"
							>
								<path
									d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
								/>
							</svg>

							<svg
								v-else
								class="swap-on fill-current w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
								/>
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { useAuthStore } from "@/store/user.store";

	const { toggleTheme, theme } = useTheme();
	const user = useAuthStore();
</script>
