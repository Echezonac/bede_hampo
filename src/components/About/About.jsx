import { aboutBedeText } from "../../utils/about";
import { useState } from 'react';
import "./About.css";

const About = () => {
	const [showAll, setShowAll] = useState(false);

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};
	return (
		<div className='row py-5 about-page' id='about'>
			{/* about content start */}
			<div className='mx-auto col-xl-8 col-lg-6 col-md-12 col-sm-12 p-0'>
				<div className='p-3'>
					{aboutBedeText
						.slice(0, showAll ? aboutBedeText.length : 1)
						.map((str, index) => (
							<p
								key={index}
								className='fs-6 p-2 text-justify mx-auto'
							>
								{str}
							</p>
						))}
					{aboutBedeText.length > 1 && (
						<p
						 style={{cursor:"pointer", textDecoration:"none"}}
							onClick={toggleShowAll}
							className='maroon-text p-0 ps-2'
						>
							{showAll ? "Show less >>" : "Show more >>"}
						</p>
					)}
				</div>
			</div>
			{/* about content end */}
		</div>
	);
};

export default About;
