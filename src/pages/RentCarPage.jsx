import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import CarList from "../components/Cars/CarList";
import ReactPaginate from "react-paginate";
import "./styles/RentCarPage.css";
import { useProducts } from "../contexts/RentContext";
import { useLocation } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RentCarPage = () => {
	const { products, getProducts } = useProducts();
	const [page, setPage] = useState(0);

	const productPerPage = 5;
	const location = useLocation();

	const pageCount = Math.ceil(products.length / productPerPage);

	const pageVisited = page * productPerPage;

	const paginateProducts = products.slice(
		pageVisited,
		pageVisited + productPerPage
	);
	const changePage = ({ selected }) => {
		setPage(selected);
	};

	return (
		<div className="rent">
			<NavBar />
			<CarList products={paginateProducts} />
			<ReactPaginate
				previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
				nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
				onPageChange={changePage}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				containerClassName="pagination"
				previousLinkClassName="previousBtn"
				nextLinkClassName="nextBtn"
				activeClassName="activeBtn"
				disableClassName="disabled"
			/>
		</div>
	);
};

export default RentCarPage;
