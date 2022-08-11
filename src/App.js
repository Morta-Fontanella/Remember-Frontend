import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./actions/auth";
import NavBar from "./components/navBar/navBar";

import "./appStyle.css";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const user = localStorage.getItem("profile");
		if (user) {
			// si hay usuario lo guardas en redux
			dispatch(setUser(JSON.parse(user)));
		}
	}, []);

	return (
		<div id="wrapper">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default App;
