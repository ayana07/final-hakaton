import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import NavBar from "../components/NavBar/NavBar";
import "./styles/AboutUsPage.css";

const AboutUsPage = () => {
	return (
		<>
			<div className="about">
				<NavBar />
			</div>
			<AboutUs />
		</>
	);
};

export default AboutUsPage;
