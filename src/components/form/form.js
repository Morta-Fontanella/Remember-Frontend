import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import "./formStyles.css";
import { createNote, updateNote } from "../../actions/notes";

function Form(props, setFormPopup, currentId, setCurrentId) {
	const dispatch = useDispatch();
	const note = useSelector((state) =>
		currentId ? state.notes.find((p) => p._id === currentId) : null
	);

	const [noteData, setNoteData] = useState({
		creator: "",
		title: "",
		content: "",
		color: "",
		image: "",
	});

	useEffect(() => {
		if (note) setNoteData(note);
	}, [note]);

	const clear = () => {
		setCurrentId(null);
		setNoteData({ creator: "", title: "", content: "", color: "", image: "" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId === 0) {
			dispatch(updateNote(currentId, noteData));
		} else {
			dispatch(createNote(noteData));
		}
		props.setFormPopup(false);
		clear();
	};

	return props.trigger ? (
		<div className="formContainer">
			<form autoComplete="off" noValidate>
				<div className="textContainer">
					<div className="titleContainer">
						<input
							className="title"
							type="Text"
							placeholder="Title"
							value={noteData.title}
							onChange={(e) =>
								setNoteData({ ...noteData, title: e.target.value })
							}
						></input>
						<label class="fa-solid fa-image addImg">
							<FileBase
								className="fa-solid fa-image"
								type="file"
								multiple={false}
								onDone={({ base64 }) => {
									setNoteData({ ...noteData, image: base64 });
								}}
							/>
						</label>
					</div>
					<textarea
						className="content"
						type="Text"
						placeholder="Write something..."
						value={noteData.content}
						onChange={(e) =>
							setNoteData({ ...noteData, content: e.target.value })
						}
					></textarea>
				</div>
				<div className="buttonContainer">
					<i className="fa-solid fa-palette"></i>
					<i className="fa-solid fa-check" onClick={handleSubmit}></i>
				</div>
			</form>
			<i
				className="fa-solid fa-circle-xmark closeForm"
				onClick={() => props.setFormPopup(false)}
			></i>
		</div>
	) : null;
}

export default Form;
