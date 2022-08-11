import { AUTH, SET_USER } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const setUser = (user) => {
	return {
		type: SET_USER,
		payload: user,
	};
};

export const signin = (formData) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		dispatch({ type: AUTH, data });
	} catch (response) {
		return response;
	}
};

export const signup = (formData) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);

		dispatch({ type: AUTH, data });
	} catch (response) {
		return response;
	}
};

export const google = (formData) => async (dispatch) => {
	try {
		const { data } = await api.google(formData);

		dispatch({ type: AUTH, data });
	} catch (response) {
		return response;
	}
};
