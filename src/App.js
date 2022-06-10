import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getNotes } from "./actions/notes";
import Button from "./components/button/button";
import Notes from "./components/notes/notes";
import Form from "./components/form/form";

import "./appStyle.css";

import logo from "./images/logo.png";

const App = () => {
	const [formPopup, setFormPopup] = useState(false);
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [formPopup, dispatch]);

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
				<Notes setFormPopup={setFormPopup} setCurrentId={setCurrentId} />
				<Form
					trigger={formPopup}
					setFormPopup={setFormPopup}
					currentId={currentId}
					setCurrentId={setCurrentId}
				/>
			</main>
		</div>
	);
};

export default App;
