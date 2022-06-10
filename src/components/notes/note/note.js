import React, { useState } from "react";
import moment from "moment";

import "./noteStyles.css";

function Note({ note }) {
	const [openColors, setOpenColors] = useState(false);
	const toggleColors = () => setOpenColors(!openColors);
	const [openOptions, setOpenOptions] = useState(false);
	const toggleOptions = () => setOpenOptions(!openOptions);

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
						<i
							className="fa-solid fa-palette"
							onKeyPress={() => toggleColors(!openColors)}
							onClick={() => toggleColors(!openColors)}
						></i>
						{openColors ? (
							<div className="colorPicker">
								<div className="color red"></div>
								<div className="color pink"></div>
								<div className="color yellow"></div>
								<div className="color green"></div>
								<div className="color blue"></div>
								<div className="color purple"></div>
							</div>
						) : null}
						<i
							className="fa-solid fa-ellipsis-vertical"
							onKeyPress={() => toggleOptions(!openColors)}
							onClick={() => toggleOptions(!openColors)}
						></i>
						{openOptions ? (
							<div className="dropdownOptions">
								<span className="edit" onClick={() => console.log("edit")}>
									Edit
								</span>
								<span className="option" onClick={() => console.log("delete")}>
									Delete
								</span>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
