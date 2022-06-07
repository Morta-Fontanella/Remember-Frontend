import React from "react";

import "./noteStyles.css";

function Note(props) {
	return (
		<div className={"note " + (props.color ? props.color : "")}>
			{props.img ? <img src={props.img} alt="note" /> : <div></div>}
			<div className="textContainer">
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
			<div className="infoContainer">
				<div className="bottomContainer">
					<p>
						Created by {props.creator} {props.date} days ago
					</p>
					<div className="buttonContainer">
						<i className="fa-solid fa-palette"></i>
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
