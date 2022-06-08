import React, { useState } from "react";
import FileBase from "react-file-base64";

import "./formStyles.css";

const Form = () => {
	const [noteData, setNoteData] = useState({
		creator: "",
		title: "",
		content: "",
		color: "",
		selectedFile: "",
	});

	const clear = () => {
		setNoteData({
			creator: "",
			title: "",
			content: "",
			color: "",
			selectedFile: "",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("LAS NOTAS");
		console.log(noteData);
	};

	return (
		<div className="formContainer" onClick={clear}>
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
						<FileBase
							className="fa-solid fa-image"
							type="file"
							multiple={false}
							onDone={({ base64 }) => {
								setNoteData({ ...noteData, image: base64 });
							}}
						/>
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
		</div>
	);
};

export default Form;
