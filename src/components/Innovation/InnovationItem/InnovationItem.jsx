import "./InnovationItem.css";

const InnovationItem = ({ innovation }) => {
	const { img, name, status, link, description } =
		innovation;

	return (
		<div className='row pb-5 innovate-item mx-auto'>
			{/* about the innovation */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
				<h1 className='text-light'>{name}</h1>
				<small className='maroon-text fw-bold'>
					{status}
				</small>
				<p
					className='text-justify text-light'
					
				>
					{description}
				</p>
				<div className='d-flex mb-3'>
					<a
						href={link}
						className={`btn d-block btn-outline-light fw-bold ${
							link === "" ? "disabled" : ""
						}`}
					>
						Know More
					</a>
				</div>
			</div>
			{/* innovation display */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 px-3'>
				<div className='card p-0'>
					<img src={img} alt='Tride' className='card-img' />
				</div>
			</div>
		</div>
	);
};

export default InnovationItem;
