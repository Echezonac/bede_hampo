import React, { useState } from "react";
import "./Innovation.css";
import projects from "../../utils/innovations";

const Innovation = () => {
	const [activeIndex, setActiveIndex] = useState(0); // State to track active index
	const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

	const handleClick = (index) => {
		setActiveIndex(index);
		// Close the menu after selecting an item (optional)
		setMenuOpen(false);
	};

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className='container'>
			<div className='row mt-custom py-5' id='innovation'>
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
				<div className='col-12'>
					<div className='card bg-dark p-3'>
						{/* Hamburger menu icon for smaller screens */}
						<div
							className='menu-icon'
							onClick={handleMenuToggle}
						>
							&#9776;
						</div>
						{/* menu start */}
						<ul
							className={`menu-list ${
								menuOpen ? "open" : ""
							}`}
						>
							{projects.map((project, index) => (
								<li
									key={index}
									className={
										index === activeIndex ? "active" : ""
									}
									onClick={() => handleClick(index)}
								>
									<a href='#' className='text-light'>
										{project.name}
									</a>
								</li>
							))}
						</ul>
						{/* menu end */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Innovation;
