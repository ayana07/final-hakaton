import React from "react";
import EditCar from "../components/Cars/EditCar";
import NavBar from "../components/NavBar/NavBar";
import "./styles/EditRentCarPage.css";

const EditRentCarPage = () => {
	return (
		<div className="edit">
			<NavBar />
			<EditCar />
		</div>
	);
};

export default EditRentCarPage;
