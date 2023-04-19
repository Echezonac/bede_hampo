import line from "../../assets/images/hero-line.svg"
import './Project.css'

const Project = () => {
	return (
		<div className="row py-5" id="services">
			<div className="col-12">
				<h1 className="little-title ps-5 w-700">MY PROJECTS</h1>
				<img src={line} alt="small-line" className="img-fluid ps-5" />
				<h3 className="ps-5 sub-heading">
					Some of my latest work <br /> that makes me proud
				</h3>
				<div className="filter-container ms-5 mt-2 sub-heading">
					<span>All</span> / <span>Tech</span> / <span>Archi</span> /{" "}
					<span>Consultant</span> / <span>Mentorship</span>
				</div>
			</div>
			<div className="col-12 mt-5">
				<div className="row mt-5 px-1"></div>
			</div>
		</div>
	)
}

export default Project
