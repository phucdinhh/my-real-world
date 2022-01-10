import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Setting from "./containers/Setting";

function App() {
	return (
		<Routes>
			<Route path="/setting" element={<Setting />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
