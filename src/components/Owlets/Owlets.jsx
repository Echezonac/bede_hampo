import line from "../../assets/images/hero-line.svg";
import "./Owlets.css";
import { reasonContent } from "./ProjectItem/Content";
import snapShots from "./ProjectItem/SnapShot";
import { useState } from "react";
import OwletItem from "./ProjectItem/OwletItem";

const Owlets = () => {
	const [data, setData] = useState(snapShots);
	const [currentPage, setCurrentPage] = useState(1);
	  const [postsPerPage, setPostsPerPage] = useState(
			getPostsPerPage()
		);

		function getPostsPerPage() {
			if (window.innerWidth >= 992) {
				return 4;
			} else if (window.innerWidth >= 768) {
				return 2;
			} else {
				return 1;
			}
		}

		window.onresize = () =>
			setPostsPerPage(getPostsPerPage());

	// useEffect(() => {
	// 	// const fetchData = async () => {
	// 	// 	const response = await fetch(
	// 	// 		"https://api.example.com/data"
	// 	// 	);
	// 	// 	const jsonData = await response.json();
	// 	// 	setData(jsonData);
	// 	// };
	//     setData(snapShots);
	// 	// fetchData();
	// }, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(
		indexOfFirstPost,
		indexOfLastPost
	);
	console.log(data);
	const paginate = (pageNumber) =>
		setCurrentPage(pageNumber);

	return (
		<div className='row py-5 px-custom' id='owlets'>
			<div className='col-12'>
				<h1 className='fs-3 hero-title'>Owleets</h1>
				<p className='fw-bold'>
					"Experience-Driven Learning: Empowering Juniors to
					Learn by Doing"
				</p>
				<p className='text-justify'>{reasonContent}</p>
			</div>
			{/* snapshot start */}
			<div className='col-12 mt-4'>
				<div className='row mb-4'>
					{currentPosts.map((item, index) => (
						<OwletItem key={index} item={item} />
					))}
				</div>
				<div className='row'>
					<div
						className='mx-auto d-flex'
						style={{ width: "fit-content" }}
					>
						{Array.from({
							length: Math.ceil(data.length / postsPerPage),
						}).map((_, index) => (
							<button
								className={`custom-btn d-block mx-2 text-light ${
									currentPage === index + 1
										? "active-btn"
										: ""
								}`}
								style={{ width: "40px" }}
								key={index}
								onClick={() => paginate(index + 1)}
							>
								{index + 1}
							</button>
						))}
					</div>
				</div>
			</div>
			{/* snapshot end */}
		</div>
	);
};

export default Owlets;
