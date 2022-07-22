import React from "react";
import { NavLink } from "react-router-dom";

import "./formInputStyles.css";

function FormInput(props) {
	const error = () => {
		if (props.errorMessage === "" || props.errorMessage === undefined) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<div className="formInput">
			<div className="titleContainer">
				<label>{props.title}</label>
				{props.isSignup && (
					<NavLink to={props.linkPath}>
						<span>{props.linkText}</span>
					</NavLink>
				)}
			</div>
			<input
				type={props.type ? props.type : "text"}
				name={props.name}
				onChange={props.onChange}
				value={props.value}
				className={error() ? "error" : ""}
			/>
			{
				// Show error message
				error() && <span className="errorMessage">{props.errorMessage}</span>
			}
		</div>
	);
}

export default FormInput;
