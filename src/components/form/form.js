import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import "./formStyles.css";
import { createNote, updateNote } from "../../actions/notes";

function Form(props) {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem(`profile`));
	const [noteData, setNoteData] = useState({
		title: "",
		content: "",
		color: "",
		image: "",
	});

	const note = useSelector((state) =>
		props.currentId ? state.notes.find((p) => p._id === props.currentId) : null
	);

	useEffect(() => {
		if (note) {
			setNoteData(note);
		}
	}, [note]);

	const clear = () => {
		props.setCurrentId(null);
		setNoteData({ title: "", content: "", color: "", image: "" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (props.currentId === null) {
			dispatch(createNote({ ...noteData, name: user?.result?.name }));
		} else {
			dispatch(
				updateNote(props.currentId, { ...noteData, name: user?.result?.name })
			);
			/* window.location.reload(); */
		}
		props.setFormPopup(false);
		clear();
	};

	const changeColor = (e) => {
		noteData.color = e;
	};

	const closeButton = () => {
		clear();
		props.setFormPopup(false);
	};

	return props.trigger ? (
		<div className="formContainer">
			<form
				autoComplete="off"
				noValidate
				className={note && note.color ? note.color : ""}
			>
				{note && note.image ? <img src={note.image} alt="note" /> : <div></div>}
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
						<label className="fa-solid fa-image addImg">
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
				<div className="formbuttonContainer">
					<div className="colorPicker">
						<div
							className="color white"
							onClick={() => changeColor(null)}
						></div>
						<div className="color red" onClick={() => changeColor("red")}></div>
						<div
							className="color pink"
							onClick={() => changeColor("pink")}
						></div>
						<div
							className="color yellow"
							onClick={() => changeColor("yellow")}
						></div>
						<div
							className="color green"
							onClick={() => changeColor("green")}
						></div>
						<div
							className="color blue"
							onClick={() => changeColor("blue")}
						></div>
						<div
							className="color purple"
							onClick={() => changeColor("purple")}
						></div>
					</div>
					<i className="fa-solid fa-check" onClick={handleSubmit}></i>
				</div>
			</form>
			<i
				className="fa-solid fa-circle-xmark closeForm"
				onClick={closeButton}
			></i>
		</div>
	) : null;
}

export default Form;
