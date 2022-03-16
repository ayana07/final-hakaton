import React from "react";
import Favorites from "../components/Favorites/Favorites";
import NavBar from "../components/NavBar/NavBar";
import "./styles/FavoritesPage.css";

const FavoritesPage = () => {
	return (
		<div className="favorite">
			<NavBar />
			<Favorites />
		</div>
	);
};

export default FavoritesPage;
