import React from "react";
import "./Carousel.css"

const Carousel = ({ imgs }) => {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide'
			data-bs-ride='carousel'
		>
			<div className='carousel-indicators'>
				{imgs.map((_, index) => (
					<button
						key={index}
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to={index}
						className={index === 0 ? "active" : ""}
						aria-current={index === 0 ? "true" : "false"}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div className='carousel-inner'>
				{imgs.map((img, index) => (
					<div
						key={index}
						className={`carousel-item ${
							index === 0 ? "active" : ""
						}`}
					>
						<img
							src={img}
							className='d-block w-100 rounded'
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleIndicators'
				data-bs-slide='prev'
			>
				<span
					className='carousel-control-prev-icon'
					aria-hidden='true'
				></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleIndicators'
				data-bs-slide='next'
			>
				<span
					className='carousel-control-next-icon'
					aria-hidden='true'
				></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default Carousel;
