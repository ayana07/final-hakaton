import React from "react";
import SectionAboutUs from "../components/Home/SectionAboutUs";
import SectionFeedback from "../components/Home/SectionFeedback";
import SectionOurCatalog from "../components/Home/SectionOurCatalog";
import NavBar from "../components/NavBar/NavBar";
import "./styles/HomePage.css";

const HomePage = () => {
	return (
		<>
			<div className="content">
				<NavBar />
			</div>
			<SectionAboutUs />
			<SectionOurCatalog />
			<SectionFeedback />
		</>
	);
};

export default HomePage;
