import React, { useState } from "react";
import moment from "moment";
import { deleteNote } from "../../../actions/notes";
import { useDispatch } from "react-redux";

import "./noteStyles.css";

function Note({ setFormPopup, note, setCurrentId }) {
	const [openColors, setOpenColors] = useState(false);
	const dispatch = useDispatch();
	const toggleColors = () => {
		setOpenColors(!openColors);
	};

	const editButton = () => {
		setFormPopup(true);
		setCurrentId(note._id);
	};

	const deleteButton = () => {
		dispatch(deleteNote(note._id));
	};

	return (
		<div className={"note " + (note.color ? note.color : "")}>
			{note.image ? (
				<img src={note.image} alt="note" onClick={editButton} />
			) : (
				<div></div>
			)}
			<div className="textContainer" onClick={editButton}>
				<h4>{note.title}</h4>
				<p>{note.content}</p>
			</div>
			<div className="infoContainer">
				<div className="bottomContainer">
					<p>
						Created by {note.creator} {moment(note.createdAt).fromNow()}
					</p>
					<div className="buttonContainer">
						<i className="fa-solid fa-trash" onClick={deleteButton}></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Note;
