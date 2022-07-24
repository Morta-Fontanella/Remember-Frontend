import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import "./formStyles.css";
import { createNote, updateNote } from "../../actions/notes";

function Form(props) {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem(`profile`));
	var googleAcount = false;

	if (user != null) {
		googleAcount = false;
		if (user.id != null) {
			googleAcount = true;
		}
	}

	const [noteData, setNoteData] = useState({
		title: "",
		content: "",
		color: "",
		image: "",
		name: "",
	});
	const [backColor, setBackColor] = useState("");
	const [image, setImage] = useState("");
	const note = useSelector((state) =>
		props.currentId ? state.notes.find((p) => p._id === props.currentId) : null
	);
	const allowEditNote = () => {
		if (note === null) {
			return true;
		} else {
			if (user != null) {
				if (googleAcount) {
					if (user.id === note.creatorId) {
						return true;
					}
				} else {
					if (
						user.result._id === note.creatorId ||
						user.result.admin === true
					) {
						return true;
					} else {
						return false;
					}
				}
			}
		}
	};

	useEffect(() => {
		if (note) {
			setNoteData(note);
			setBackColor(note.color);
			setImage(note.image);
		}
	}, [note]);

	const clear = () => {
		props.setCurrentId(null);
		setNoteData({ title: "", content: "", color: "", image: "" });
	};

	const handleSubmit = (e) => {
		if (user != null) {
			e.preventDefault();
			if (note === null) {
				// create note
				if (googleAcount) {
					dispatch(
						createNote({ ...noteData, creatorId: user?.id, name: user?.name })
					);
				} else {
					dispatch(
						createNote({
							...noteData,
							creatorId: user?.result?._id,
							name: user?.result?.name,
						})
					);
				}
			} else {
				// create edit
				if (note._id === props.currentId) {
					if (allowEditNote()) {
						if (googleAcount) {
							dispatch(
								updateNote(props.currentId, {
									...noteData,
									name: user?.id,
								})
							);
						} else {
							dispatch(
								updateNote(props.currentId, {
									...noteData,
									name: user?.result?.id,
								})
							);
						}
						window.location.reload();
					}
				}
			}
			props.setFormPopup(false);
			clear();
		} else {
			console.log("Null user, please register.");
		}
	};

	const changeColor = (e) => {
		setBackColor(e);
		noteData.color = e;
	};

	const changeImage = (e) => {
		setImage(e);
		noteData.image = e;
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
				className={note && backColor ? backColor : ""}
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
							readOnly={!allowEditNote()}
						></input>
						{allowEditNote() ? (
							<label className="fa-solid fa-image addImg">
								<FileBase
									className="fa-solid fa-image"
									type="file"
									multiple={false}
									onDone={({ base64 }) => {
										changeImage(base64);
									}}
								/>
							</label>
						) : (
							""
						)}
					</div>
					<textarea
						className="content"
						type="Text"
						placeholder="Write something..."
						value={noteData.content}
						onChange={(e) =>
							setNoteData({ ...noteData, content: e.target.value })
						}
						readOnly={!allowEditNote()}
					></textarea>
				</div>
				{allowEditNote() ? (
					<div className="formbuttonContainer">
						<div className="colorPicker">
							<div
								className="color white"
								onClick={() => changeColor(null)}
							></div>
							<div
								className="color red"
								onClick={() => changeColor("red")}
							></div>
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
				) : (
					""
				)}
			</form>
			<i
				className="fa-solid fa-circle-xmark closeForm"
				onClick={closeButton}
			></i>
		</div>
	) : null;
}

export default Form;
