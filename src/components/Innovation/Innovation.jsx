import "./Innovation.css";
import ServiceItem from './ServiceItem/ServiceItem';
import projects from '../../utils/projects';

const Innovation = () => {
	const projects = [
		"Soothe",
		"RoadBill",
		"PointSub",
		"BlackGold",
	];
	return (
		<div className='row py-5 bg-black' id='innovation'>
			<div className='col-12'>
				<div className='row'>
					<div className='mx-auto col-xl-6 col-lg-6 col-md-8 col-sm-10'>
						<p className='text-light text-center fs-6'>
							"My dreams are vast, challenging, and
							sometimes daunting, yet entirely attainable.
							At the core of my aspirations lies a
							deep-seated commitment: to craft solutions
							that embody unparalleled creativity,
							futuristic innovation, and unwavering
							sustainability. These principles serve as
							guiding beacons illuminating my path in all
							endeavors."
						</p>
					</div>
				</div>
				{/* card start */}
				<div className='row p-4 mt-5'>
					{projects.map((project, index) => (
						<ServiceItem name={project} key={index} />
					))}
				</div>
				{/* card end */}
				{/* contact start */}
				<div className='row'>
					<p className='text-light text-center'>
						Feel free to reach out to me for further details
						on these innovative solutions.
					</p>
				</div>
				{/* contact end */}
			</div>
		</div>
	);
};

export default Innovation;
