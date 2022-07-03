import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

import "./appStyle.css";

const App = () => {
	return (
		<div id="wrapper">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default App;
