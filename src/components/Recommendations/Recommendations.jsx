import "./Recommendations.css";
import { useState } from "react";
import Card from "./Card/WorkCard";
import recommends from "../../utils/recommendations";

const Recommendations = () => {
	const [data, setData] = useState(recommends);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(
		getPostsPerPage()
	);

	function getPostsPerPage() {
		if (window.innerWidth >= 992) {
			return 3;
		} else if (window.innerWidth >= 768) {
			return 2;
		} else {
			return 1;
		}
	}

	window.onresize = () =>
		setPostsPerPage(getPostsPerPage());

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(
		indexOfFirstPost,
		indexOfLastPost
	);

	const totalPages = Math.ceil(data.length / postsPerPage);

	const getPageNumbers = () => {
		const displayPages = 5; // Change this value to adjust the number of displayed page numbers
		const midPoint = Math.ceil(displayPages / 2);

		let startPage = currentPage - midPoint + 1;
		let endPage = currentPage + midPoint - 1;

		if (startPage < 1) {
			startPage = 1;
			endPage = Math.min(displayPages, totalPages);
		} else if (endPage > totalPages) {
			endPage = totalPages;
			startPage = Math.max(
				1,
				totalPages - displayPages + 1
			);
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i
		);
	};

	const paginate = (pageNumber) =>
		setCurrentPage(pageNumber);

	return (
		<div className='row py-5 px-custom' id='recommendation'>
			<div className='col-12'>
				<h1 className='fs-3 hero-title'>Recommendations</h1>
				<p className='fw-bold'>
					"What people say about me"
				</p>
			</div>
			<div className='col-12 mt-4'>
				<div className='row mb-4'>
					{currentPosts.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
				<div className='row'>
					<div
						className='mx-auto d-flex'
						style={{ width: "fit-content" }}
					>
						{getPageNumbers().map((pageNumber) => (
							<button
								className={`custom-btn d-block mx-2 text-light ${
									currentPage === pageNumber
										? "active-btn"
										: ""
								}`}
								style={{ width: "40px" }}
								key={pageNumber}
								onClick={() => paginate(pageNumber)}
							>
								{pageNumber}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommendations;
