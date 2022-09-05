import { defineStore } from "pinia";

interface IUser {
	email: string;
	name: string;
}
type UserStore = IUser | null;

export const useStore = defineStore("store", {
	state: () => ({
		currentUser: null as UserStore,
	}),
	getters: {
		hasUser: state => !!state.currentUser,
	},
	actions: {
		setUser(userData: IUser) {
			this.currentUser = userData;
		},
		removeUser() {
			this.currentUser = null;
		},
	},
});
