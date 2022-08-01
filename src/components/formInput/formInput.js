import React from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

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
				<div className="title">
					<label>{props.title}</label>
					{props.name === "password" && (
						<Tooltip
							title="Password must be at least one uppercase letter, one lowercase
						letter and one number"
							placement="right"
							color="red"
						>
							<i className="fa-solid fa-circle-info"></i>
						</Tooltip>
					)}
				</div>
				{props.isSignup && (
					<div>
						<NavLink to={props.linkPath}>
							<span className="forgotLink">{props.linkText}</span>
						</NavLink>
					</div>
				)}
			</div>

			<input
				type={props.type ? props.name : "text"}
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
