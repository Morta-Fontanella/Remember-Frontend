import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import logo from "../../images/logo.png";
import Button from "../button/button";

import "./navBarStyles.css";
import * as actionType from "../../constants/actionTypes";

const NavBar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	function handleSignOut(event) {
		dispatch({ type: actionType.LOGOUT });
		setUser(null);
	}

	const signOut = () => {
		dispatch({ type: actionType.LOGOUT });

		navigate("../auth", { replace: true });

		setUser(null);
	};

	useEffect(() => {
		const token = user?.jti;

		if (token) {
			/* const decodedToken = decode(token); */

			if (token.exp * 1000 < new Date().getTime()) signOut();
		}

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

	const toggleDropdownMenu = () => {
		const userMenu = document.getElementById("dropdownMenu");
		userMenu.classList.toggle("show");
	};

	function userName() {
		if (user.name) {
			return user.name;
		} else {
			return user.result.name;
		}
	}

	function userAvatar() {
		if (user.name) {
			return <img className="avatar" src={user.picture} alt={user.name}></img>;
		} else {
			if (!user.result.avatar) {
				return <i class="fas fa-user-circle"></i>;
			} else {
				return (
					<img
						className="avatar"
						src={user.result.avatar}
						alt={user.name}
					></img>
				);
			}
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
								<h3 className="userName">{userName()}</h3>
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
