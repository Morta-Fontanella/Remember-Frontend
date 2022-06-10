import * as api from "../api";

export const getNotes = () => async (dispatch) => {
	try {
		const { data } = await api.fetchNotes();

		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createNote = (note) => async (dispatch) => {
	try {
		console.log("creaaateeee");
		const { data } = await api.createNote(note);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateNote = (id, note) => async (dispatch) => {
	try {
		console.log("pasa por el update");
		const { data } = await api.updateNote(id, note);

		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};
