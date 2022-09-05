type IType = "success" | "error";
interface ToastOptions {
	message: string;
	type: IType;
	timeout?: number;
	key: string;
}

type Toast = ToastOptions[];
const toastList = ref<Toast>([]);

export function useToast() {
	function addToast(toastOpt: Omit<ToastOptions, "key">) {
		const opt = { ...toastOpt } as ToastOptions;
		opt.key = (Math.random() * 10).toString(30).substr(2);
		toastList.value = [opt, ...toastList.value];
	}

	function removeToast(key: string) {
		toastList.value = toastList.value.filter(val => val.key !== key);
	}
	return { toastList, addToast, removeToast };
}
