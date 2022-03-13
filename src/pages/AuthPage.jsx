import React from "react";
import HomePage from "./HomePage";
import Login from "../components/Auth/Login";
import { useAuth } from "../contexts/AuthContexts";
import NavBar from "../components/NavBar/NavBar";
import "./styles/AuthPage.css";

const AuthPage = () => {
	const { user } = useAuth();
	return (
		<>
			<div className="auth-back">
				<NavBar />
				{user ? <HomePage /> : <Login />}
			</div>
		</>
	);
};

export default AuthPage;
