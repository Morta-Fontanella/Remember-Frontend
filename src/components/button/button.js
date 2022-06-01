import React from "react";

import "./buttonStyles.css";

function Button(props) {
	return (
		<button
			type="button"
			className={"button " + (props.type ? props.type : "")}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
