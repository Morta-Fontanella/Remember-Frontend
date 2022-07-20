import React from "react";
import { NavLink } from "react-router-dom";

import "./formInputStyles.css";

function FormInput(props) {
	return (
		<div className="formInput">
			<div className="titleContainer">
				<label>{props.title}</label>
				{props.isSignup && (
					<NavLink to={props.linkPath}>
						<a>{props.linkText}</a>
					</NavLink>
				)}
			</div>
			<input
				type={props.type ? props.type : "text"}
				name={props.name}
				onChange={props.onChange}
				value={props.value}
				pattern={props.pattern ? props.pattern : ""}
				required={props.required ? props.required : false}
			/>
			<span className="errorMessage">{props.errorMessage}</span>
		</div>
	);
}

export default FormInput;
