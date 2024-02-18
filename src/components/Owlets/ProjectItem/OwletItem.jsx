import "./OwletItem.css";
// import { Link } from "react-router-dom"

const OwletItem = ({
	date,
	location,
	img,
	description,
}) => {
	return (
		<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
			<div className='card-content'>
				<div className='card-header'>
					<h2>Date: {date}</h2>
					<h2>Location: {location}</h2>
				</div>
				<div className='card-body'>
					<img
						src={img}
						alt='Mentorship Snapshot'
					/>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default OwletItem;
