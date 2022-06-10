// eslint-disable-next-line
export default (notes = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return [...notes, action.payload];
		case "UPDATE":
			return notes.map(
				(note) => (note._id = action.payload._id ? action.payload : note)
			);
		default:
			return notes;
	}
};
