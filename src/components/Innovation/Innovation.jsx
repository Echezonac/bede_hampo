import React, { useState } from "react";
import "./Innovation.css";
import projects from "../../utils/innovations";
import InnovationItem from "./InnovationItem/InnovationItem";

const Innovation = () => {
	const [activeIndex, setActiveIndex] = useState(0); 
	
	const handleNext = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex + 1) % projects.length
		);
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='container'>
			<div className='row mt-custom py-2 mb-5' id='innovation'>
				<div className='col-12'>
					<h5 className='title text-light mb-4'>
						Transforming Imagination into Impactful
						Solutions:
					</h5>
					<p className='text-light mb-4 text-justify'>
						Everyday problems spark wild ideas. Here's where
						I build them into reality.
					</p>
				</div>
				
			</div>
			<div className='row projects'>
				{/* Display selected project */}
				{projects.map((project, index) =>
					index === activeIndex ? (
						<InnovationItem
							key={index}
							innovation={project}
						/>
					) : null
				)}
			</div>
			<div className='col-6 mx-auto d-flex justify-content-center p-0'>
				<button
					className='btn btn-light mr-2'
					onClick={handlePrev}
				>
					Prev
				</button>
				&nbsp;&nbsp;
				<button
					className='btn btn-light'
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Innovation;
