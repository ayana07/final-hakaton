import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/RentContext";
import Filtre from "../Filtre/Filtre";
import CarCard from "./CarCard";
import "./styles/CarList.css";

const CarList = ({ products }) => {
	const { getProducts } = useProducts();

	const [searchParams, setSearchParams] = useSearchParams();

	const [search, setSearch] = useState(
		searchParams.get("q") ? searchParams.get("q") : ""
	);

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, []);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	return (
		<div>
			<div className="relative ml-7 z-0 mb-6  group">
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<button
						type="submit"
						class="p-1 focus:outline-none focus:shadow-outline"
					>
						<svg
							fill="none"
							stroke="gray"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							class="w-6 h-6"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
				</span>
				<input
					type="search"
					name="q"
					className="block py-2 px-0 w-avto text-sm pl-10 text-gray-900 bg-transparent border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder="Search..."
					autocomplete="off"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div>
				<Filtre />
			</div>
			<section className="car-list lg:pt-[80px] pb-10 lg:pb-20">
				<div className="container">
					<div className="flex flex-wrap">
						{products ? (
							products.map((item) => <CarCard item={item} key={item.id} />)
						) : (
							<>
								<h2>..Loading</h2>
							</>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default CarList;
