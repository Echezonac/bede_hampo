import small_line from "../../assets/images/small-line.png"
import './Services.css'
import { services } from "../../utils/services"
import ServiceItem from "./ServiceItem/ServiceItem"



const Services = () => {
	return (
		<div className="row py-5" id="services">
			<div className="col-12">
				<h1 className="little-title ps-5 w-700">MY SERVICES</h1>
				<img src={small_line} alt="small-line" className="img-fluid ps-5" />
				<h3 className="ps-5 sub-heading">
					Skilled at web, mobile application<br /> development, and architectural<br />
					designs
				</h3>
				<a
					href="tel:+2347065896334"
					className="fw-bold btn custom-btn fs-6 ms-5 mt-3"
				>
					Give me a call &#8594;
				</a>
			</div>
            <div className="col-12 mt-5">
                <div className="row mt-5 px-1">
                    {services.map((item, key)=> <ServiceItem {...item} key={item.id} />)}
                </div>
            </div>
		</div>
	)
}

export default Services
