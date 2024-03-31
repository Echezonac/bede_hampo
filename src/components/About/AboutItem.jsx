// AboutItem.js
import React from "react";

const AboutItem = ({
	imageSrc,
	title,
	description,
	buttonText,
	lgCol,
	bgColor,
	color,
	url,
}) => {
	return (
		<div
			className={`col-xl-${lgCol} col-lg-${lgCol} col-md-${lgCol} col-sm-12 p-2`}
		>
			<div
				className='card d-flex justify-content-center p-5'
				style={{
					width: "100%",
					backgroundColor: bgColor,
					border: "none",
				}}
			>
				<div
					style={{
						height: "fit-content",
						border: "none",
					}}
				>
					<img
						src={imageSrc}
						width={50}
						height={50}
						className='img-fluid'
						alt={title}
					/>
					<h4 className={`text-${color}`}>{title}</h4>
					<small
						className={`text-${color} d-block text-justify`}
					>
						{description}
					</small>
					<a
						href={url}
						className={`mt-3 btn btn-${color}`}
					>
						{buttonText}
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutItem;
