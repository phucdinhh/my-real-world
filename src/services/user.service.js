import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.realworld.io/api/";

const getPublicContent = () => {
	return axios.get(API_URL + "articles");
};

const getUserBoard = () => {
	return axios.get(API_URL + "profiles", { headers: authHeader() });
};

const getTags = () => {
	return axios.get(API_URL + "tags");
};

const UserService = {
	getPublicContent,
	getUserBoard,
	getTags,
};

export default UserService;
