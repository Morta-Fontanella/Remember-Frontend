import React from "react";
import { NavLink } from "react-router-dom";

import "./formInputStyles.css";

function FormInput(props) {
	const [focused, setFocused] = React.useState(false);

	const handleFocus = () => {
		setFocused(true);
	};
	return (
		<div className="formInput">
			<div className="titleContainer">
				<label>{props.title}</label>
				{props.isSignup && (
					<NavLink to={props.linkPath}>
						<p>{props.linkText}</p>
					</NavLink>
				)}
			</div>
			<input
				type={props.type ? props.type : "text"}
				name={props.name}
				onChange={props.onChange}
				value={props.value}
				pattern={!props.isSignup && (props.pattern ? props.pattern : "")}
				required={!props.isSignup && (props.required ? props.required : false)}
				onBlur={handleFocus}
				focused={focused.toString()}
			/>
			<span className="errorMessage">{props.errorMessage}</span>
		</div>
	);
}

export default FormInput;
