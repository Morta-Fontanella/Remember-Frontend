import React from "react";

import "./buttonStyles.css";

function Button(props) {
	return (
		<button
			type={props.type ? props.type : "button"}
			className={"button " + (props.design ? props.design : "")}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
