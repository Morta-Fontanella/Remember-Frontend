import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import Wave from "react-wavify";
import FormInput from "../formInput/formInput";
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
	const dispatch = useDispatch();
	const [formData, setformData] = useState(inistialState);
	const [nameError, setNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const navigate = useNavigate();

	//Validations
	var formError = false;

	if (location.state === null) {
		var { isSignup } = false;
	} else {
		var { isSignup } = location.state;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		formError = false;
		Validations();
		if (formError) {
			return;
		} else {
			if (isSignup) {
				dispatch(signup(formData, navigate));
			} else {
				dispatch(signin(formData, navigate));
			}
		}
	};

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	function handleCallbackResponse(response) {
		var userObject = jwt_decode(response.credential);
		const sign = require("jwt-encode");
		const secret = "test";
		const token = sign(
			{
				email: userObject.email,
				id: userObject.aud,
				expiresIn: "30min",
			},
			secret
		);
		var user = {
			id: userObject.email,
			name: userObject.name,
			email: userObject.email,
			picture: userObject.picture,
			token: token,
		};
		localStorage.setItem("profile", JSON.stringify(user));
		navigate("/");
	}

	useEffect(() => {
		const google = window.google;
		// google auth
		google.accounts.id.initialize({
			client_id:
				"345095198176-e7h80fb0p4ltuib1foohfim062h2p78r.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(
			document.getElementById("googleSignIn"),
			{}
		);
	});

	const Validations = () => {
		if (isSignup) {
			//Validations for signup
			if (formData.name === "") {
				setNameError("Name is required");
				formError = true;
			} else {
				if (formData.name.length < 3) {
					setNameError("Name must be at least 3 characters");
					formError = true;
				} else {
					if (formData.name.match(/^[a-zA-Z]+$/)) {
						setNameError("");
					} else {
						setNameError("Name must be letters only");
						formError = true;
					}
				}
			}
			if (formData.lastName === "") {
				setLastNameError("Last name is required");
				formError = true;
			} else {
				if (formData.lastName.length < 3) {
					setLastNameError("Last name must be at least 3 characters");
					formError = true;
				} else {
					if (formData.lastName.match(/^[a-zA-Z]+$/)) {
						setLastNameError = "";
					} else {
						setLastNameError("Last name must be letters only");
						formError = true;
					}
				}
			}
			if (formData.email === "") {
				setEmailError("Email is required");
				formError = true;
			} else {
				if (
					formData.email.match(
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
					)
				) {
					setEmailError = "";
				} else {
					setEmailError("Invalid email");
					formError = true;
				}
			}
			if (formData.password === "") {
				setPasswordError("Password is required");
				formError = true;
			} else {
				if (formData.password.length < 6) {
					setPasswordError("Password must be at least 6 characters");
					formError = true;
				} else {
					if (
						formData.password.match(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/
						)
					) {
						setPasswordError("");
					} else {
						setPasswordError(
							"Password must be at least one uppercase letter, one lowercase letter and one number"
						);
						formError = true;
					}
				}
			}
			if (
				formData.password !== formData.confirmPassword ||
				formData.confirmPassword === ""
			) {
				setConfirmPasswordError("Passwords do not match");
				formError = true;
			}
		} else {
		}
	};

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
									<FormInput
										title="Name"
										name="name"
										onChange={handleChange}
										errorMessage={nameError}
									></FormInput>
									<FormInput
										title="Last Name"
										name="lastName"
										onChange={handleChange}
										errorMessage={lastNameError}
									></FormInput>
								</>
							)
						}
						<FormInput
							title="Email"
							name="email"
							onChange={handleChange}
							errorMessage={emailError}
						></FormInput>
						<FormInput
							title="Password"
							name="password"
							type="password"
							onChange={handleChange}
							errorMessage={passwordError}
							isSignup={!isSignup}
							linkPath="/changePass"
							linkText="Forgot Password?"
						></FormInput>
						{
							// Sign up Confirm Password
							isSignup && (
								<FormInput
									title="Confirm password"
									name="ConfirmPassword"
									type="password"
									onChange={handleChange}
									errorMessage={confirmPasswordError}
									pattern={formData.password}
									required={true}
								></FormInput>
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
						<div id="googleSignIn" className="googleButton"></div>
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
