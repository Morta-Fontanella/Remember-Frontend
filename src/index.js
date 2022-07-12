import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";
import ChangePass from "./components/changePass/changePass";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="auth" element={<Auth />} />
						<Route path="changePass" element={<ChangePass />} />
						<Route
							path="*"
							element={
								<main style={{ padding: "1rem" }}>
									<p>There's nothing here!</p>
								</main>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
