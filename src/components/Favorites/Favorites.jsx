import React, { useEffect } from "react";
import { useProducts } from "../../contexts/RentContext";

const Favorites = () => {
	const { cart, getCart, deleteCartProducts } = useProducts();

	useEffect(() => {
		getCart();
	}, []);

	return (
		<div className="mb-10">
			{cart.products.map((index) => (
				<div
					className="card w-90 m-10 lg:card-side bg-base-100 shadow-xl"
					key={index.item.name}
				>
					<figure>
						<img src={index.item.picture} alt="#" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{index.item.name}</h2>
						<p>{index.item.description}</p>
						<h6>{index.item.type}</h6>
						<div className="card-actions justify-end">
							<button
								className="btn btn-outline text-orange-500"
								onClick={() => deleteCartProducts(index.item.id)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Favorites;
