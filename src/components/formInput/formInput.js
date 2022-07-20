import React from "react";

import "./formInputStyles.css";

function FormInput(props) {
	return (
		<div className="formInput">
			<label>{props.title}</label>
			<input
				type={props.type ? props.type : "text"}
				name={props.name}
				onChange={props.onChange}
				value={props.value}
				pattern={props.pattern}
				required={props.required}
			/>
			<span className="errorMessage">{props.errorMessage}</span>
		</div>
	);
}

export default FormInput;
