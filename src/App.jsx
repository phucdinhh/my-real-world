import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Setting from "./containers/Setting";
import Profile from "./containers/Profile";
import ProtecedRoute from "./routing/ProtecedRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtecedRoute />}>
          <Route path="/user-profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
