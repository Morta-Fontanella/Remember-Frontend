import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getNotes } from "./actions/notes";
import Button from "./components/button/button";
import Notes from "./components/notes/notes";
import Form from "./components/form/form";

import "./appStyle.css";

import logo from "./images/logo.png";

const App = () => {
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		dispatch(getNotes());
	}, [currentId, dispatch]);

	return (
		<div id="wrapper">
			<header>
				<div className="logoContainer">
					<img src={logo} alt="logo" />
					<h2>Remember</h2>
				</div>
				<div className="userButtonsContainer">
					<Button type="outlined" onClick={() => console.log("login")}>
						Log in
					</Button>
					<Button type="filled" onClick={() => console.log("register")}>
						Register
					</Button>
				</div>
			</header>
			<main>
				<Notes setCurrentId={setCurrentId} />
				<Form currentId={currentId} setCurrentId={setCurrentId} />
			</main>
		</div>
	);
};

export default App;
