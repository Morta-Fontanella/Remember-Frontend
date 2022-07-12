import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Button from "../button/button";

import "./navBarStyles.css";

const NavBar = () => {
	var storedTheme =
		localStorage.getItem("theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");
	if (storedTheme)
		document.documentElement.setAttribute("data-theme", storedTheme);

	var currentTheme = document.documentElement.getAttribute("data-theme");

	const changeMode = () => {
		var currentTheme = document.documentElement.getAttribute("data-theme");
		var targetTheme = "light";

		if (currentTheme === "light") {
			targetTheme = "dark";
		}

		document.documentElement.setAttribute("data-theme", targetTheme);
		localStorage.setItem("theme", targetTheme);
	};

	return (
		<header>
			<NavLink to="/">
				<div className="logoContainer">
					<img src={logo} alt="logo" />
					<h2>Remember</h2>
				</div>
			</NavLink>
			<div className="rightContainer">
				<i className="fa-solid fa-moon " onClick={changeMode}></i>
				<div className="userButtonsContainer">
					<NavLink to="/login">
						<Button type="outlined">Sign in</Button>
					</NavLink>
					<NavLink to="/register">
						<Button type="filled">Sign up</Button>
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
