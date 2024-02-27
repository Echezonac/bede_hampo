import React, { useState } from "react";
import "./WorkCard.css"; // Import your CSS file for custom styles

const WorkCard = ({ item }) => {
	const { name, jobTitle, date, content, image, link } =
		item;
	const [expanded, setExpanded] = useState(false);
	const [cardHeight, setCardHeight] = useState("auto");

	// Function to toggle the expanded state
	const toggleExpand = () => {
		setExpanded(!expanded);
		setCardHeight(expanded ? "auto" : "630px");
	};

	// Function to truncate content to first 10 words
	const truncateContent = (str, words) => {
		return str.split(" ").slice(0, words).join(" ") + "...";
	};

	return (
		<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-3'>
			<div
				className='card shadow-sm'
				style={{ height: cardHeight }}
			>
				<div className='card-body d-flex flex-column'>
					<div className='d-flex align-items-center mb-auto'>
						{" "}
						{/* Use flex-column and mb-auto to align the top part at the top and the button at the bottom */}
						<img
							src={image}
							alt='Profile'
							className='rounded-circle me-3'
							style={{ width: "50px", height: "50px" }}
						/>
						<div>
							<h6 className='mb-0'>{name}</h6>
							<p className='text-muted mb-0'>{jobTitle}</p>
							<small className='text-muted'>{date}</small>
						</div>
					</div>
					<hr />
					<p className='card-text text-justify'>
						{expanded
							? content
							: truncateContent(content, 10)}
						{content.split(" ").length > 10 && (
							<p
								style={{ cursor: "pointer" }}
								onClick={toggleExpand}
								className='read-more-link maroon-text'
							>
								{expanded ? "Read less" : "Read more"}
							</p>
						)}
					</p>
					{link && (
						<a
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-dark align-self-end' // Align the button to the end (bottom) of the card
						>
							Verify
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
