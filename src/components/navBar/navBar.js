import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import Button from "../button/button";

import "./navBarStyles.css";
import * as actionType from "../../constants/actionTypes";

const NavBar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const location = useLocation();

	/* 	const logout = () => {
		dispatch({ type: actionType.LOGOUT });

		navigate.push("/");

		setUser(null);
	}; */

	function handleSignOut(event) {
		dispatch({ type: actionType.LOGOUT });
		setUser(null);
	}

	useEffect(() => {
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	var storedTheme =
		localStorage.getItem("theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");
	if (storedTheme)
		document.documentElement.setAttribute("data-theme", storedTheme);

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
					{user && (
						<div className="containerAvatar">
							<img className="avatar" src={user.picture} alt={user.name}></img>
							<h3 className="avatarName">{user.name}</h3>
							<Button design="filled" onClick={handleSignOut}>
								Logout
							</Button>
						</div>
					)}
					{!user && (
						<>
							<NavLink to="/auth" state={{ isSignup: false }}>
								<Button design="outlined">Sign in</Button>
							</NavLink>
							<NavLink to="/auth" state={{ isSignup: true }}>
								<Button design="filled">Sign up</Button>
							</NavLink>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default NavBar;
