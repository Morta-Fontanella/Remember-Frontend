import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import Note from "./note/note";
import Loader from "../loader/loader";

import "./notesStyles.css";

const Notes = ({ setFormPopup, setCurrentId }) => {
	var notekey = 0;
	const notes = useSelector((state) => state.notes);

	const newNote = () => {
		setFormPopup(true);
		setCurrentId(null);
	};

	return (
		<>
			<div className="notesContainer">
				<div className="titleContainer">
					<h2>Notes</h2>
					<Button design={"filled"} onClick={newNote}>
						New note
					</Button>
				</div>
				{!notes.length ? (
					<Loader />
				) : (
					<div className="notesGrid">
						{notes
							.slice(0)
							.reverse()
							.map((note) => (
								<Note
									key={notekey++}
									setFormPopup={setFormPopup}
									note={note}
									setCurrentId={setCurrentId}
								/>
							))}
					</div>
				)}
			</div>
		</>
	);
};

export default Notes;
