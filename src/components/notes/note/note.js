import React, { useState } from "react";
import moment from "moment";
import { deleteNote } from "../../../actions/notes";

import "./noteStyles.css";

function Note({ setFormPopup, note, setCurrentId }) {
	const [openColors, setOpenColors] = useState(false);
	const toggleColors = () => {
		setOpenOptions(false);
		setOpenColors(!openColors);
	};
	const [openOptions, setOpenOptions] = useState(false);
	const toggleOptions = () => {
		setOpenColors(false);
		setOpenOptions(!openOptions);
	};

	const editButton = () => {
		console.log("edit button " + note._id);
		setFormPopup(true);
		setCurrentId(note._id);
		setOpenOptions(!openOptions);
	};

	const deleteButton = () => {
		setOpenOptions(!openOptions);
		deleteNote(note._id);
	};

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
						<div>
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
						</div>
						<div>
							<i
								className="fa-solid fa-ellipsis-vertical"
								onKeyPress={() => toggleOptions(!openColors)}
								onClick={() => toggleOptions(!openColors)}
							></i>
							{openOptions ? (
								<div className="dropdownOptions">
									<span className="edit" onClick={editButton}>
										Edit
									</span>
									<span className="option" onClick={deleteButton}>
										Delete
									</span>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
