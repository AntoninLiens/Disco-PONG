import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:1111/",
	headers: {
		"Content-Type": "application/json"
	}
});

export const setAuthToken = (token: string) => {
	instance.defaults.headers.common["Authorization"] = `bearer ${token}`;
}

export const setRefreshToken = (token: string) => {
	instance.defaults.headers.common["refreshToken"] = `${token}`;
}

export const removeAuthToken = () => {
	instance.defaults.headers.common["Authorization"] = "";
	// instance.defaults.headers.common["refreshToken"] = "";
}

export default instance;