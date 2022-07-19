import axios from "axios";

//const url = "http://localhost:5000/notes";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const fetchNotes = () => API.get("/notes");
export const createNote = (newNote) => API.post("/notes", newNote);
export const updateNote = (id, updateNote) =>
	API.patch(`'/notes/'${id}`, updateNote);
export const deleteNote = (id) => API.delete(`'/notes'${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
