import React from "react";
import { useProducts } from "../../contexts/RentContext";
import "./Filtre.css";

const Filtre = () => {
	const { fetchByParams } = useProducts();

	return (
		<div>
			<main class="flex w-full items-center justify-center">
				<div
					class="grid w-[40rem] grid-cols-4 space-x-2 rounded-xl border-2 border-white p-2"
					x-data="app"
					onChange={(e) => fetchByParams("type", e.target.value)}
				>
					<div>
						<input
							value="all"
							type="radio"
							name="option"
							id="1"
							class="peer hidden"
						/>
						<label
							for="1"
							class="block text-orange-500  cursor-pointer select-none  p-2 text-center peer-checked:border-b-4 border-orange-500 peer-checked:font-normal peer-checked:text-black"
						>
							All
						</label>
					</div>

					<div>
						<input
							value="journey"
							type="radio"
							name="option"
							id="2"
							class="peer hidden"
						/>
						<label
							for="2"
							class="block text-orange-500  cursor-pointer select-none  p-2 text-center peer-checked:border-b-4 border-orange-500 peer-checked:font-normal peer-checked:text-black"
						>
							Journey
						</label>
					</div>

					<div>
						<input
							value="racing"
							type="radio"
							name="option"
							id="3"
							class="peer hidden"
						/>
						<label
							for="3"
							class="block text-orange-500 cursor-pointer select-none  p-2 text-center peer-checked:border-b-4 border-orange-500 peer-checked:font-normal peer-checked:text-black"
						>
							Racing
						</label>
					</div>

					<div>
						<input
							value="simple"
							type="radio"
							name="option"
							id="4"
							class="peer hidden"
						/>
						<label
							for="4"
							class="block text-orange-500 cursor-pointer select-none  p-2 text-center peer-checked:border-b-4 border-orange-500 peer-checked:font-normal peer-checked:text-black"
						>
							Simple
						</label>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Filtre;
