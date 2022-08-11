import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotes } from "../../actions/notes";
import Notes from "../../components/notes/notes";
import Form from "../../components/form/form";

import "./homeStyles.css";

const Home = () => {
	const [formPopup, setFormPopup] = useState(false);
	const [currentId, setCurrentId] = useState(null);
	const [reloadNotes, setReloadNotes] = useState(false);
	const dispatch = useDispatch();

	//load notes
	useEffect(() => {
		dispatch(getNotes());
	}, [reloadNotes]);
	/*
	//reload notes after create or update note
	useEffect(() => {
		if (reloadNotes) {
			dispatch(getNotes());
			setReloadNotes(false);
		}
	}, [reloadNotes, dispatch]);
*/
	return (
		<main id="home">
			<Notes setFormPopup={setFormPopup} setCurrentId={setCurrentId} />
			<Form
				trigger={formPopup}
				setFormPopup={setFormPopup}
				currentId={currentId}
				setCurrentId={setCurrentId}
				setReloadNotes={setReloadNotes}
			/>
		</main>
	);
};

export default Home;
