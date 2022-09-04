export function validateEmail(email: string): string {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (email === "") {
		return "enter you email";
	} else if (!re.test(email)) {
		return "invalid email address";
	} else {
		return "";
	}
}
export function validatePassword(password: string): string {
	if (password === "") {
		return "enter you password";
	} else if (password.length < 6) {
		return "password too short. min 6 characters";
	} else {
		return "";
	}
}
export function validateName(name: string): string {
	if (name === "") {
		return "enter you name";
	} else if (!/^[a-zA-Z\s]*$/g.test(name)) {
		return "invalid name format";
	} else if (name.length < 2) {
		return "name too short";
	} else {
		return "";
	}
}
