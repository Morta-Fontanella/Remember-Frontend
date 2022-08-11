import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";

import logo from "../../images/logo.png";
import Button from "../button/button";

import "./navBarStyles.css";
import * as actionType from "../../constants/actionTypes";

const NavBar = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const location = useLocation();

	function handleSignOut() {
		dispatch({ type: actionType.LOGOUT });
		window.location.reload();
	}

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) handleSignOut();
		}
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

	const toggleDropdownMenu = () => {
		const userMenu = document.getElementById("dropdownMenu");
		userMenu.classList.toggle("show");
	};

	function userAvatar() {
		if (!user.result.avatar) {
			return <i class="fas fa-user-circle"></i>;
		} else {
			return (
				<img
					className="avatar"
					src={user.result.avatar}
					alt={user.result.name}
				></img>
			);
		}
	}

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
						<div className="userMenuContainer">
							<div className="userContainer" onClick={toggleDropdownMenu}>
								<div>{userAvatar()}</div>
								<h3 className="userName">{user.result.name}</h3>
							</div>
							<div id="dropdownMenu">
								<div className="Item" onClick={handleSignOut}>
									<i className="fa-solid fa-right-from-bracket"></i>
									Sign Out
								</div>
							</div>
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
