import React from "react";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";

import Notes from "./components/notes/notes";
import Form from "./components/form/form";

import logo from "./images/logo.png";

const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<img src={logo} />
				<Typography variant="h2" color="inherit">
					Remember
				</Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Notes />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
