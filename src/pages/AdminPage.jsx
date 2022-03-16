import React from "react";
import AddCar from "../components/Cars/AddCar";
import NavBar from "../components/NavBar/NavBar";
import "./styles/AdminPage.css";

const AdminPage = () => {
	return (
		<div className="admin">
			<NavBar />
			<AddCar />
		</div>
	);
};

export default AdminPage;
