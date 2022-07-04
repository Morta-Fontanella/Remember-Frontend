import React from "react";
import { NavLink } from "react-router-dom";
import Wave from "react-wavify";
import Button from "../button/button";

import "./loginStyles.css";

const Login = () => {
	return (
		<main id="login">
			<div className="mainContainer">
				<div className="loginContainer">
					<h3>Sign In</h3>
					<form>
						<label>Email</label>
						<input type="email" name="email" />
						<div className="passwordTitle">
							<label>Password</label>
							<NavLink to="/changePass">
								<a>Forgot password?</a>
							</NavLink>
						</div>
						<input type="password" name="password" />
						<Button type="filled">Sign In</Button>
						<div className="divider">
							<div className="line"></div>
							<p>or</p>
							<div className="line"></div>
						</div>
						<Button type="outlined">
							<i class="fa-brands fa-google"></i>
							Sign with google
						</Button>
					</form>
				</div>
			</div>
			<Wave
				paused={false}
				options={{
					height: 20,
					amplitude: 30,
					speed: 0.15,
					points: 3,
				}}
			/>
		</main>
	);
};

export default Login;
