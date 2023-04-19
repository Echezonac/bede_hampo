import "./Hero.css";
import hero_line from "../../assets/images/hero-line.svg";
import "animate.css";

const Hero = () => {
	return (
		<div className="row hero-page white-bg p-5" id="hero">
			<div className="col-12 hero-container">
				<div className="hero-content">
					<h1 className="d-flex justify-content-between align-items-center hero-name">
						
						<img src={hero_line} alt="enadot_hero_line" className="img-fluid" />
					</h1>
					<h1 className="hero-title py-2 lh-sm">
						FUTURISTIC, UNIQUE AND SUSTAINABLE{" "}
						<span className="maroon-text">SOLUTIONS...</span>
					</h1>
					<p className="fs-6 white-text">
						I am Bede E. Hampo. A Fullstack Developer & Design Engineer{" "}
						available for business and collaboration, worldwide.
					</p>
					<a
						href="tel:+2347065896334"
						className="fw-bold btn custom-btn-1 fs-6"
					>
						Give me a call &#8594;
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
