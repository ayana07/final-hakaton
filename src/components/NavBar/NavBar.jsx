import React from "react";
import { Link } from "react-router-dom";
import { ADMIN } from "../../consts";
import { useAuth } from "../../contexts/AuthContexts";
import logo from "../../assets/logos.png";
import "./NavBar.css";
import { useProducts } from "../../contexts/RentContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";

const pages = [
	{
		name: "Car Rental",
		link: "/rents",
		id: 5,
	},
	{
		name: "Contacts",
		link: "/contact",
		id: 4,
	},
];

const NavBar = () => {
	const {
		handleLogout,
		user: { email },
	} = useAuth();

	const { cart } = useProducts();
	return (
		<>
			<div className="">
				<nav className=" px-6 relative md">
					<div className="flex flex-row justify-between items-center py-2">
						<Link to="/">
							<img className="w-7rem" src={logo} alt="" />
						</Link>
						<div className="group flex flex-col items-center">
							<button className="p-2 rounded-lg md:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="#fff"
									className="h-10 fill-current"
									viewBox="0 0 16 16"
									color="#fff"
								>
									<path
										fillRule="evenodd"
										d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
									/>
								</svg>
							</button>
							<div className="hidden group-hover:block md:block absolute md:static  inset-x-0 top-16 py-3 shadow-md md:shadow-none text-black">
								<div className="flex flex-row justify-center items-center text-center font-semibold text-black burger">
									{pages.map((page) => (
										<Link to={page.link}>
											<a
												className="px-6 text-white font-serif font-light  py-1 flex flex-col md:flex-row md:items-center"
												href="#"
											>
												{page.name}
											</a>
										</Link>
									))}

									{email == ADMIN ? (
										<Link to="/admin">
											<a
												className="px-6 py-1 flex flex-col md:flex-row md:items-center"
												href="#"
											>
												<svg
													className="h-7 w-7 text-white"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokewidth="2"
														d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
													/>
												</svg>
											</a>
										</Link>
									) : (
										<Link to="/favorites">
											<button className="btn-favorites mr-10">
												<Badge
													badgeContent={
														cart?.products ? cart.products.length : 0
													}
													color="error"
												>
													{" "}
													<FavoriteBorderIcon sx={{ color: "white" }} />
												</Badge>
											</button>
										</Link>
									)}

									{email ? (
										<button
											className="text-white  btn btn-outline hover:bg-orange-500"
											onClick={handleLogout}
										>
											Logout
										</button>
									) : null}

									{email ? null : (
										<Link to="/auth">
											<button
												className=" text-white btn btn-outline hover:bg-orange-500"
												onClick={handleLogout}
											>
												LogIn
											</button>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
