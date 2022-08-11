import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case actionType.AUTH:
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			return { ...state, authData: action.data };
		case actionType.SET_USER:
			return { ...state, user: action.payload };
		case actionType.LOGOUT:
			localStorage.clear();

			return { ...state, authData: null };
		default:
			return state;
	}
};

export default authReducer;
