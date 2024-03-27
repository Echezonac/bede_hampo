import React, { useState } from "react";
import "./WorkCard.css"; // Import your CSS file for custom styles

const WorkCard = ({ item }) => {
	const { name, jobTitle, date, content, image, link } =
		item;

	return (
		<div className='col-xl-6 col-lg-6 col-md-12 p-4 col-sm-12'>
			<div className='card bg-dark'>
				<i className='bi bi-quote text-light fs-1'></i>
				<p className='text-light content-text'>{content}</p>
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
			</div>
		</div>
	);
};

export default WorkCard;
