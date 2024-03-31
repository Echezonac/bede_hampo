import "./InnovationItem.css";

const InnovationItem = ({ innovation }) => {
	const { img, name, status, link, description, caption } =
		innovation;

	return (
		<div className='row pt-5 pb-5 innovate-item mx-auto'>
			{/* about the innovation */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
				<h1>{name}</h1>
				<small className='maroon-text fw-bold'>
					{status}
				</small>
				<p className='text-justify' style={{
					height: '300px'
				}}>{description}</p>
				<div className='d-flex mb-3'>
					<a
						href={link}
						className={`btn d-block btn-outline-dark fw-bold ${
							link === "" ? "disabled" : ""
						}`}
					>
						Know More
					</a>
				</div>
			</div>
			{/* innovation display */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 px-4'>
				<div class='card'>
					<img src={img} alt='Tride' class='card-img' />
				</div>
			</div>
		</div>
	);
};

export default InnovationItem;
