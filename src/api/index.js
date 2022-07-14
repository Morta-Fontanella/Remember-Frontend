import axios from "axios";

//const url = "http://localhost:5000/notes";
const API = axios.create({ baseURL: "http://localhost:5000/notes" });

export const fetchNotes = () => axios.get(API);
export const createNote = (newNote) => axios.post(API, newNote);
export const updateNote = (id, updateNote) =>
	axios.patch(`${API}/${id}`, updateNote);
export const deleteNote = (id) => axios.delete(`${API}/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
