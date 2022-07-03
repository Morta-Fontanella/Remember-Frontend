import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotes } from "../../actions/notes";
import Notes from "../../components/notes/notes";
import Form from "../../components/form/form";

const Home = () => {
	const [formPopup, setFormPopup] = useState(false);
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [currentId, dispatch]);
	return (
		<main>
			<Notes setFormPopup={setFormPopup} setCurrentId={setCurrentId} />
			<Form
				trigger={formPopup}
				setFormPopup={setFormPopup}
				currentId={currentId}
				setCurrentId={setCurrentId}
			/>
		</main>
	);
};

export default Home;
