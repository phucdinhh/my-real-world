import axios from "axios";

const API_URL = "https://api.realworld.io/api/";

const register = (username, email, password) => {
	return axios.post(API_URL + "users", {
		user: {
			username,
			email,
			password,
		},
	});
};

const login = (email, password) => {
	return axios
		.post(API_URL + "users/login", {
			user: {
				email,
				password,
			},
		})
		.then((response) => {
			if (response.data.Token) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}
			return response.API;
		});
};

const logout = () => {
	localStorage.removeItem("user");
};

const AuthService = {
	register,
	login,
	logout,
};

export default AuthService;
