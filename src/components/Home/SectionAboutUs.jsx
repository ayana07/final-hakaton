import React from "react";
import { Link } from "react-router-dom";
import "./styles/SectionAboutUs.css";

const SectionAboutUs = () => {
	return (
		<>
			<div className="pt-40">
				<h4 className="text-center text-4xl font-semibold text-orange-500">
					About Us
				</h4>
				<div className="flex flex-col w-full lg:flex-row p-20">
					<div className="grid p-10 flex-grow h-50 w-40 card  place-items-center">
						<p className="text-left">
							Our company is to provide an opportunity for the client to easily
							book a car rental service anywhere in the world. At the same time,
							our main credo is to provide only high—quality services at a
							competitive price. Every day, our company's analysts monitor the
							prices of rental agencies around the world, as a result of which
							we can always guarantee a very competitive price and high service.
							Our company has at least 3-4 car rental service providers in each
							city. This ensures a high level of customer service.
						</p>
					</div>
					<div className="grid p-10 flex-grow card rounded-box place-items-center h-80 w-40">
						<img
							src="https://www.investopedia.com/thmb/ZaGMT8XBCmlrVSRCVeDQi7CIT3s=/2121x1414/filters:fill(auto,1)/GettyImages-912785590-bd21254b8f914ad1a28876e45800554c.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SectionAboutUs;
