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
	const navigate = useNavigate();

	if (location.state === null) {
		var { isSignup } = false;
	} else {
		var { isSignup } = location.state;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData));
		} else {
			dispatch(signin(formData));
		}

		navigate("../#", { replace: true });
	};

	const handleChange = (e) => {
		setformData({ ...formData, [e.target.name]: e.target.value });
	};

	function handleCallbackResponse(response) {
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		localStorage.setItem("profile", JSON.stringify(userObject));
		navigate("../#", { replace: true });
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
										errorMessage="Please enter your name"
										pattern="^[a-zA-Zñáéíóúü ]{2,}$"
										required={true}
									></FormInput>
									<FormInput
										title="Last Name"
										name="lastName"
										onChange={handleChange}
										errorMessage="Please enter your last name"
										pattern="^[a-zA-Zñáéíóúü ]{2,}$"
										required={true}
									></FormInput>
								</>
							)
						}
						<FormInput
							title="Email"
							name="email"
							onChange={handleChange}
							errorMessage="Please enter a valid email"
							pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
							required={isSignup}
						></FormInput>
						<FormInput
							title="Password"
							name="password"
							type="password"
							onChange={handleChange}
							errorMessage="Please enter a valid password"
							pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
							required={isSignup}
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
									errorMessage="Doesn't match with password"
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
