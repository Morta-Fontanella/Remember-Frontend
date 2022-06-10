import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import Note from "./note/note";
import Loader from "../loader/loader";

import "./notesStyles.css";

const Notes = () => {
	const notes = useSelector((state) => state.notes);

	return (
		<>
			<div className="notesContainer">
				<div className="titleContainer">
					<h2>Notes</h2>
					<Button type="filled" onClick={() => console.log("New note")}>
						New note
					</Button>
				</div>
				{!notes.length ? (
					<Loader />
				) : (
					<div className="notesGrid">
						{notes.map((note) => (
							<Note key={note.id} note={note} />
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Notes;
