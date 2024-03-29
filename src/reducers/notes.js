import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
// eslint-disable-next-line
export default (notes = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...notes, action.payload];
		case UPDATE:
			return notes.map((note) =>
				note._id === action.payload._id ? action.payload : note
			);
		case DELETE:
			return notes.filter((note) => note._id !== action.payload);
		default:
			return notes;
	}
};
