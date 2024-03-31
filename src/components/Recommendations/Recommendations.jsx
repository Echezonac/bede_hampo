import React, { useState, useEffect } from "react";
import Card from "./Card/WorkCard";
import recommendations from "../../utils/recommendations";

const Recommendations = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [cardsPerRow, setCardsPerRow] = useState(2);

	useEffect(() => {
		const updateCardsPerRow = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 991) {
				setCardsPerRow(1); // For small screens, display one card per row
			} else {
				setCardsPerRow(2); // For medium and large screens, display two cards per row
			}
		};

		updateCardsPerRow(); // Initial setup

		window.addEventListener("resize", updateCardsPerRow); // Listen for window resize event
		return () => {
			window.removeEventListener(
				"resize",
				updateCardsPerRow
			); // Clean up event listener
		};
	}, []);

	const recommendationsPerPage = cardsPerRow;
	const startIndex = currentPage * recommendationsPerPage;
	const endIndex = startIndex + recommendationsPerPage;

	const totalPages = Math.ceil(
		recommendations.length / recommendationsPerPage
	);

	const handlePageChange = (direction) => {
		if (direction === "prev" && currentPage > 0) {
			setCurrentPage((prevPage) => prevPage - 1);
		} else if (
			direction === "next" &&
			endIndex < recommendations.length
		) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	return (
		<div className='container'>
			<div
				className='row mt-custom py-5 '
				id='recommendation'
			>
				<div className='col-12 mb-5'>
					<h2 className='text-light mb-4'>
						Recommendations from the Pros
					</h2>
					<h4 className='text-light'>
						Here's what some of them are saying.
					</h4>
				</div>
				<div className='col-12'>
					<div className='row'>
						{recommendations
							.slice(startIndex, endIndex)
							.map((item, index) => (
								<div
									key={index}
									className={`my-3 col-lg-${
										12 / cardsPerRow
									} col-md-${12 / cardsPerRow} col-sm-12 col-md-12`}
								>
									<Card item={item} />
								</div>
							))}
					</div>
					<div className='d-flex justify-content-between mt-4'>
						<div className='text-light'>
							Page {currentPage + 1} of {totalPages}
						</div>

						<div>
							<button
								className='btn btn-dark'
								onClick={() => handlePageChange("prev")}
								disabled={currentPage === 0}
							>
								Previous
							</button>
							<button
								className='btn btn-dark'
								onClick={() => handlePageChange("next")}
								disabled={
									endIndex >= recommendations.length
								}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommendations;
