import React from "react";

import "./formStyles.css";

const Form = () => {
	return (
		<div className="formContainer hidden">
			<form>
				<div className="textContainer">
					<div className="titleContainer">
						<input className="title" type="Text" placeholder="Title"></input>
						<i className="fa-solid fa-image"></i>
					</div>
					<textarea
						className="content"
						type="Text"
						placeholder="Write something..."
					></textarea>
				</div>
				<div className="buttonContainer">
					<i className="fa-solid fa-palette"></i>
					<i className="fa-solid fa-check"></i>
				</div>
			</form>
		</div>
	);
};

export default Form;
