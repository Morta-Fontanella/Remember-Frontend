import React from "react";
import moment from "moment";

import "./noteStyles.css";

function Note({ note }) {
	return (
		<div className={"note " + (note.color ? note.color : "")}>
			{note.image ? <img src={note.image} alt="note" /> : <div></div>}
			<div className="textContainer">
				<h3>{note.title}</h3>
				<p>{note.content}</p>
			</div>
			<div className="infoContainer">
				<div className="bottomContainer">
					<p>
						Created by {note.creator} {moment(note.createdAt).fromNow()}
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
