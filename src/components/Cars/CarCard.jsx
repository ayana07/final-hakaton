import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/RentContext";
import { useAuth } from "../../contexts/AuthContexts";
import { ADMIN } from "../../consts";

const CarCard = ({ item }) => {
	const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
	const navigate = useNavigate();

	const {
		user: { email },
	} = useAuth();

	return (
		<div className="w-full md:w-1/2 xl:w-1/3 px-4">
			<div className="bg-white rounded-lg overflow-hidden mb-10">
				{/* <div style={{ height: "300px" }} image={item.picture}></div> */}
				<figure className="h-30 w-full">
					<img src={item.picture} className="w-full" />
				</figure>
				<div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
					<h3
						className="font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block"
					>
						{item.name}
					</h3>
					<p className="text-base text-body-color leading-relaxed mb-7">
						{item.description}
					</p>
					<p className="text-base text-body-color leading-relaxed mb-7">
						{item.price}
					</p>
					<div>
						{email === ADMIN ? (
							<>
								<button
									className="btn btn-outline mr-20 "
									onClick={() => deleteProduct(item.id)}
								>
									<svg
										class="h-8 w-8 text-black"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
								<button
									className="btn btn-outline hover:bg-orange-300"
									onClick={() => navigate(`/edit/${item.id}`)}
								>
									<svg
										class="h-8 w-8 text-black"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										{" "}
										<path stroke="none" d="M0 0h24v24H0z" />{" "}
										<path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
										<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
										<line x1="16" y1="5" x2="19" y2="8" />
									</svg>
								</button>
							</>
						) : (
							<>
								<button onClick={() => addProductToCart(item)}>
									<h5 color={checkProductInCart(item.id) ? "orange" : ""}>
										ORDER
									</h5>
								</button>
								<button>
									<svg
										className="h-8 w-8 text-black"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										{" "}
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
									</svg>
								</button>
								<button>
									<svg
										className="h-8 w-8 text-black"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										{" "}
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
									</svg>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarCard;
