import { createGlobalState, useDark, useToggle } from "@vueuse/core";

const themes = {
	light: "synthwave",
	dark: "night",
};

export const useTheme = createGlobalState(() => {
	const isDark = useDark({
		selector: "html",
		attribute: "data-theme",
		valueDark: themes.dark,
		valueLight: themes.light,
	});
	const toggleTheme = useToggle(isDark);
	const currentTheme = computed(() => (isDark ? themes.dark : themes.light));

	return { theme: { currentTheme, isDark }, toggleTheme };
});
