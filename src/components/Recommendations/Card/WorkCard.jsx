import React from "react";
import "./WorkCard.css"; // Import your CSS file for custom styles

const WorkCard = ({ item }) => {
	const { name, jobTitle, content, image, link } =
		item;

	return (
		<div className='card bg-dark'>
			<i className='bi bi-quote text-light fs-1'></i>
			<p className='text-light content-text'>{content}</p>
			<div className='d-flex align-items-center justify-content-between'>
				<div className='d-flex align-items-center'>
					<img
						src={image}
						className='img-fluid d-block'
						alt='bede_hampo_recommendation_img'
					/>
					<div className='mx-3'>
						<small className='user-name text-light d-block'>
							{name}
						</small>
						<small className='user-title text-light d-block'>
							{jobTitle}
						</small>
					</div>
				</div>
				<a
					href={link}
					target='_blank'
					rel='noreferrer'
					className='text-light'
				>
					verify <i className='bi bi-arrow-up-right'></i>
				</a>
			</div>
		</div>
	);
};

export default WorkCard;
