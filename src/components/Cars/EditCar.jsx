import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/RentContext";

const EditCar = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const { getProductDetails, productDetails, saveEditedProduct } =
		useProducts();

	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: 0,
		picture: "",
		type: "",
	});

	const handleInput = (e, product, setProduct) => {
		let obj = {
			...product,
			[e.target.name]: e.target.value,
		};
		setProduct(obj);
	};

	useEffect(() => {
		getProductDetails(id);
	}, []);

	useEffect(() => {
		setProduct(productDetails);
	}, [productDetails]);

	return (
		<div>
			<div style={{ padding: "60px" }}>
				<div className=" add-form max-w-3xl h-2xl mx-auto">
					<form>
						<div className="relative z-0 mb-6 w-full group">
							<input
								value={product.picture}
								name="picture"
								onChange={(e) => handleInput(e, product, setProduct)}
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Picture
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								name="name"
								value={product.name}
								onChange={(e) => handleInput(e, product, setProduct)}
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Name
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								name="description"
								value={product.description}
								onChange={(e) => handleInput(e, product, setProduct)}
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Description
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								name="price"
								value={product.price}
								onChange={(e) => handleInput(e, product, setProduct)}
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Price
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								name="type"
								value={product.type}
								onChange={(e) => handleInput(e, product, setProduct)}
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Type
							</label>
						</div>

						<button
							type="submit"
							className="text-white btn  btn-outline focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 hover:bg-orange-300 hover:border-white "
							onClick={() => {
								saveEditedProduct(product);
								navigate("/rents");
							}}
						>
							Edit Info
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditCar;
