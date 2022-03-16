import React from "react";
import HeroSection from "../components/Home/HeroSection";
import SectionAboutUs from "../components/Home/SectionAboutUs";
import SectionThree from "../components/Home/SectionThree";
import NavBar from "../components/NavBar/NavBar";
import "./styles/HomePage.css";

const HomePage = () => {
	return (
		<>
			<div className="content">
				<NavBar />
				<HeroSection />
			</div>
			<SectionAboutUs />
			<SectionThree />
		</>
	);
};

export default HomePage;
