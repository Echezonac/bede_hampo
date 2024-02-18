import line from "../../assets/images/hero-line.svg";
import "./Owlets.css";
import { reasonContent } from "./ProjectItem/Content";
import snapShots from "./ProjectItem/SnapShot";
import { useState } from "react";
import OwletItem from './ProjectItem/OwletItem';

const Owlets = () => {
	const [data, setData] = useState(snapShots);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

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
		<div className='row py-5' id='owlets'>
			<div className='col-12'>
				<h1 className='ps-5 fs-1 hero-title'>Owlets</h1>
				<img
					src={line}
					alt='small-line'
					className='img-fluid ps-5'
				/>
				<p className='ps-5 fw-bold'>
					"Tell me and I forget, teach me and I may
					remember, involve me and I learn." - Benjamin
					Franklin
				</p>
				<p className='px-5 text-justify'>{reasonContent}</p>
			</div>
			{/* snapshot start */}
			<div className='col-12 px-5'>
				<div className='row'>
					{currentPosts.map((item, index) => (
						<OwletItem key={index} item={item} />
					))}
				</div>
				<div className='row'>
					{Array.from({
						length: Math.ceil(data.length / postsPerPage),
					}).map((_, index) => (
						<button className='d-inline btn btn-maroon text-light'
							key={index}
							onClick={() => paginate(index + 1)}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
			{/* snapshot end */}
		</div>
	);
};

export default Owlets;
