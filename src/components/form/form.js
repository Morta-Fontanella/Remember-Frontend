import React from "react";

import "./formStyles.css";

const Form = () => {
	return (
		<div className="formContainer hidden">
			<form>
				<div className="textContainer">
					<div className="titleContainer">
						<input className="title" type={Text} placeholder="Title"></input>
						<i class="fa-solid fa-image"></i>
					</div>
					<textarea
						className="content"
						type={Text}
						placeholder="Write something..."
					></textarea>
				</div>
				<div className="buttonContainer">
					<i class="fa-solid fa-palette"></i>
					<i class="fa-solid fa-check"></i>
				</div>
			</form>
		</div>
	);
};

export default Form;
