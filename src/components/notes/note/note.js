import React from "react";
import moment from "moment";
import { deleteNote } from "../../../actions/notes";
import { useDispatch } from "react-redux";

import "./noteStyles.css";

function Note({ setFormPopup, note, setCurrentId }) {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem(`profile`));
	var canDelete = false;
	var googleAcount = null;

	if (user != null) {
		googleAcount = false;
		if (user.jti != null) {
			googleAcount = true;
		}
	}

	const editButton = () => {
		setFormPopup(true);
		setCurrentId(note._id);
	};
	const deleteButton = () => {
		if (user != null) {
			if (googleAcount) {
				if (note.creatorId === user.jti) {
					dispatch(deleteNote(note._id));
				}
			} else {
				if (user.result._id === note.creatorId || user.result.admin === true) {
					dispatch(deleteNote(note._id));
				}
			}
		}
	};

	if (user != null) {
		if (googleAcount) {
			if (note.creatorId === user.jti) {
				canDelete = true;
			}
		} else {
			if (user.result._id === note.creatorId || user.result.admin === true) {
				canDelete = true;
			}
		}
	}

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
					{
						<p>
							Created by {note.name} {moment(note.createdAt).fromNow()}
						</p>
					}
					{canDelete && (
						<>
							<div className="buttonContainer">
								<i className="fa-solid fa-trash" onClick={deleteButton}></i>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Note;
