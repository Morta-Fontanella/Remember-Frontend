import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import Note from "./note/note";
import Loader from "../loader/loader";

import "./notesStyles.css";

const Notes = ({ setFormPopup, setCurrentId }) => {
	const notes = useSelector((state) => state.notes);

	return (
		<>
			<div className="notesContainer">
				<div className="titleContainer">
					<h2>Notes</h2>
					<Button type="filled" onClick={() => setFormPopup(true)}>
						New note
					</Button>
				</div>
				{!notes.length ? (
					<Loader />
				) : (
					<div className="notesGrid">
						{notes.map((note) => (
							<Note
								/* key={note.id} es del padre no del hijo*/
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
