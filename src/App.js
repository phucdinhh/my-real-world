import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Article from "./containers/Article"
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Setting from "./containers/Setting";

const App = () => {
	return (
		<>
			<Layout>
				<Routes>
					<Route>
						<Route path="/article" element={<Article />} />
						<Route path="/setting" element={<Setting />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
