import "./ServiceItem.css";
import innovate from "../../../assets/images/idea.png"

const ServiceItem = ({ name }) => {
	return (
		<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 px-5 my-2'>
			<div class='tilted-card'>
				<div class='content'>
					<img
						src={innovate}
						className='d-block mx-auto p-3'
						alt='bede_innovations'
					/>
					<p className='text-center fw-bold maroon-text'>
						{name}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceItem
