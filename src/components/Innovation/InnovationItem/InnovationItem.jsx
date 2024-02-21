import "./InnovationItem.css";
import Carousel from "./Carousel";

const InnovationItem = ({ item }) => {
	const { imgs, name, status, link, description, caption } =
		item;
	return (
		<>
			{/* innovation img start */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5'>
				<Carousel imgs={imgs} />
			</div>
			{/* innovation content start */}
			<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 ps-xl-5 ps-lg-5'>
				<h6 className='hero-title fs-5'>
					<b>{name}</b> - {caption} <br />
					<small className='fw-bold'>
						Status:{" "}
						<span className='maroon-text'>{status}</span>
					</small>
				</h6>
				<p className='text-justify my-2'>{description}</p>
				<a className='btn custom-btn' href={link}>
					Know more
				</a>
			</div>
		</>
	);
};

export default InnovationItem;
