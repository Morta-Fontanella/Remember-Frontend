import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

export const getNotes = () => async (dispatch) => {
	try {
		const { data } = await api.fetchNotes();

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createNote = (note) => async (dispatch) => {
	try {
		const { data } = await api.createNote(note);
		console.log(" denddtro try catch");
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateNote = (id, note) => async (dispatch) => {
	try {
		const { data } = await api.updateNote(id, note);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteNote = (id) => async (dispatch) => {
	try {
		await await api.deleteNote(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};
