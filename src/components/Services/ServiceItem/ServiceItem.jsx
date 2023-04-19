import "./ServiceItem.css"

const ServiceItem = ({ id, title, description }) => {
	return (
		<div
			className="col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0"
			// data-aos="fade-up"
		>
			<div className={`service-card service-card-${id}`}>
				<div className="inner-service-card">
					<div className="service-card-content">
						<div className="mb-4">
							<h1 className="white-text fs-4 px-4 pt-5 mb-4 little-title">
								0{id}. {title}
							</h1>
							<p
								className="white-text px-4 left-justify"
								style={{ height: "150px" }}
							>
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceItem
