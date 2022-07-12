import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Wave from "react-wavify";
import Button from "../button/button";

import "./authStyles.css";

const Auth = () => {
	const location = useLocation();
	const { isSignup } = location.state;

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
									<input type="text" name="name" />
									<label>Last Name</label>
									<input type="text" name="lastName" />
								</>
							)
						}
						<label>Email</label>
						<input type="email" name="email" />
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
										//handleChange={handleChange}
									/>
								</>
							)
						}
						<Button type="filled">{isSignup ? "Sign Up" : "Sign In"}</Button>
						<div className="divider">
							<div className="line"></div>
							<p>or</p>
							<div className="line"></div>
						</div>
						<Button type="outlined">
							<i className="fa-brands fa-google"></i>
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

export default Auth;
