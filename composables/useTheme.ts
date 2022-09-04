import { useState } from "#app";

type ThemeName = "night" | "light" | "aqua";

export const useTheme = () => {
	const theme = useState<{
		current: ThemeName;
		themes: string[];
	}>("theme", () => ({
		current: "night",
		themes: ["night", "light", "aqua"],
	}));

	function toggleTheme(name?: ThemeName) {
		if (typeof name === "undefined") {
			const themeV = theme.value;
			let currentThemeIndex = themeV.themes.findIndex(val => val === themeV.current);
			console.log(currentThemeIndex);
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
};
