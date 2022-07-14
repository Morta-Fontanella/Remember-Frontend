import axios from "axios";

const url = "http://localhost:5000/notes";

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updateNote) =>
	axios.patch(`${url}/${id}`, updateNote);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => url.post("/user/signin", formData);
export const signUp = (formData) => url.post("/user/signup", formData);
