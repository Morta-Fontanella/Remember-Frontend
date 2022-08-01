import React from "react";
import Button from "../button/button";
import Wave from "react-wavify";
import FormInput from "../formInput/formInput";

import "../auth/authStyles.css";

const ChangePass = () => {
	return (
		<main id="auth">
			<div className="mainContainer">
				<div className="authContainer">
					<h3>Forgot password?</h3>
					<form className="formInput">
						<FormInput
							title="Email"
							name="email"
							//onChange={handleChange}
							//errorMessage={emailError}
						></FormInput>
						<Button type="submit" design="filled">
							Send a new password
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

export default ChangePass;
