import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Button from "../button/button";

import "./navBarStyles.css";

const NavBar = () => {
	return (
		<header>
			<NavLink to="/home">
				<div className="logoContainer">
					<img src={logo} alt="logo" />
					<h2>Remember</h2>
				</div>
			</NavLink>
			<div className="userButtonsContainer">
				<NavLink to="/login">
					<Button type="outlined">Log in</Button>
				</NavLink>
				<NavLink to="/register">
					<Button type="filled">Register</Button>
				</NavLink>
			</div>
		</header>
	);
};

export default NavBar;
