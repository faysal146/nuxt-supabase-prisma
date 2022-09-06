import { defineStore } from "pinia";
import { User } from "@supabase/supabase-js";

type UserStore = User | null;

export const useAuthStore = defineStore("authStore", {
	state: () => ({
		currentUser: null as UserStore,
	}),
	getters: {
		hasUser: state => !!state.currentUser,
	},
	actions: {
		setUser(userData: User) {
			this.currentUser = userData;
		},
		removeUser() {
			this.currentUser = null;
		},
	},
});
