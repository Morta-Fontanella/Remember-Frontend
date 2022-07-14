import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import Wave from "react-wavify";
import Button from "../button/button";
import { signin, signup } from "../../actions/auth";

import "./authStyles.css";
const inistialState = {
	name: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const location = useLocation();
	const { isSignup } = location.state;
	const dispatch = useDispatch();
	const [user, setUser] = useState({});
	const [formData, setformData] = useState(inistialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData));
		} else {
			dispatch(signin(formData));
		}
		console.log(formData);
	};

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	function handleCallbackResponse(response) {
		var userObject = jwt_decode(response.credential);
		setUser(userObject);
		localStorage.setItem("profile", JSON.stringify(userObject));
		console.log(userObject);

		<Navigate to={"/"} replace={true} />;
	}

	useEffect(() => {
		const google = window.google;
		// google auth
		google.accounts.id.initialize({
			client_id:
				"345095198176-e7h80fb0p4ltuib1foohfim062h2p78r.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});
	}, []);

	return (
		<main id="auth">
			<div className="mainContainer">
				<div className="authContainer">
					<h3>{isSignup ? "Sign Up" : "Sign In"}</h3>

					<form>
						{
							// Sign up " Show Name and Last Name"
							isSignup && (
								<>
									<label>Name</label>
									<input type="text" name="name" onChange={handleChange} />
									<label>Last Name</label>
									<input type="text" name="lastName" onChange={handleChange} />
								</>
							)
						}
						<label>Email</label>
						<input type="email" name="email" onChange={handleChange} />
						<div className="passwordTitle">
							<label>Password</label>

							{
								// Sign in Show "Forgot Password"
								!isSignup && (
									<NavLink to="/changePass">
										<a>Forgot password?</a>
									</NavLink>
								)
							}
						</div>
						<input
							//type={showPassword ? "text" : "password"}
							//handleShowPassword={handleShowPassword}
							onChange={handleChange}
							name="password"
							type="password"
						></input>

						{
							// Sign up Confirm Password
							isSignup && (
								<>
									<label>Confirm Password</label>
									<input
										type="password"
										name="confirmPassword"
										onChange={handleChange}
									/>
								</>
							)
						}
						<Button type="submit" design="filled" onClick={handleSubmit}>
							{isSignup ? "Sign Up" : "Sign In"}
						</Button>
						<div className="divider">
							<div className="line"></div>
							<p>or</p>
							<div className="line"></div>
						</div>
						<div id="signInDiv"></div>
						<GoogleLogin

						/* clientId="345095198176-e7h80fb0p4ltuib1foohfim062h2p78r.apps.googleusercontent.com"
							render={(renderProps) => (
								<Button
									design="outlined"
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
								>
									<i className="fa-brands fa-google"></i>
									Sign with google
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
							cookiePolicity="single_host_origin" */
						/>
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

export default Auth;
