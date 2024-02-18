import { aboutBedeText } from "../../utils/about";
import "./About.css";

const About = () => {
	return (
		<div className='row py-5 about-page' id='about'>
			{/* about content start */}
			<div className='mx-auto col-xl-8 col-lg-6 col-md-12 col-sm-12 p-0'>
				<div className='p-3'>
					{aboutBedeText.map((str, index) => (
						<p
							key={index}
							className='fs-6 p-3 text-justify mx-auto'
						>
							{str}
						</p>
					))}
				</div>
			</div>
			{/* about content end */}
		</div>
	);
};

export default About;
