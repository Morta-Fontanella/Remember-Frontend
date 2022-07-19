import React from "react";
import Button from "../button/button";
import Wave from "react-wavify";

import "../auth/authStyles.css";

const ChangePass = () => {
	return (
		<div>
			<main id="auth">
				<div className="mainContainer">
					<div className="authContainer">
						<h3>Forgot password?</h3>
						<form>
							<label>email</label>
							<input type="email" name="email" />
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
		</div>
	);
};

export default ChangePass;
