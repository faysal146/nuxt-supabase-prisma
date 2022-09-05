import { createGlobalState, useLocalStorage, usePreferredDark } from "@vueuse/core";
import { useState } from "#app";

type ThemeName = "night" | "light" | "aqua";
interface ITheme {
	current: ThemeName;
	themes: string[];
}

const initVal: ITheme = {
	current: "light",
	themes: ["light", "aqua", "night"],
};

export const useTheme = createGlobalState(() => {
	const isDark = usePreferredDark();
	if (isDark.value) {
		initVal.current = "night";
	}

	const theme = useState<ITheme>("theme", () => useLocalStorage("theme", initVal, { deep: true }));

	function toggleTheme(name?: ThemeName) {
		if (typeof name === "undefined") {
			const themeV = theme.value;
			let currentThemeIndex = themeV.themes.findIndex(val => val === themeV.current);
			if (currentThemeIndex !== -1) {
				if (currentThemeIndex + 1 > themeV.themes.length - 1) {
					currentThemeIndex = 0;
				} else {
					currentThemeIndex++;
				}
				const newTheme = themeV.themes[currentThemeIndex] as ThemeName;
				theme.value.current = newTheme;
				document.querySelector("html").dataset.theme = newTheme;
			}
		} else {
			if (name !== theme.value.current) {
				theme.value.current = name;
			}
		}
	}

	onMounted(() => {
		document.querySelector("html").dataset.theme = theme.value.current;
	});

	return { theme: readonly(theme), toggleTheme };
});
