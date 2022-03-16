import React from "react";
import { Link } from "react-router-dom";
import "./styles/HeroSection.css";

const HeroSection = () => {
	return (
		<div className="text-center mt-20 pb-50">
			<h1 className="text-5xl text-white font-bold">
				Enjoy the ride in <br /> convenience and comfort
			</h1>
			<p className=" text-2xl text-white mt-3 font-light">
				Have been whaiting for you
			</p>
			<Link to="/rents">
				<button className="btn btn-outline text-white mt-9 hover:bg-orange-300 border-white">
					Book a Car
				</button>
			</Link>
		</div>
	);
};

export default HeroSection;
