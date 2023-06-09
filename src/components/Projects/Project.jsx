import line from "../../assets/images/hero-line.svg"
import './Project.css'

import {
	BsFillCaretRightFill,
	BsFillCaretLeftFill,
} from "react-icons/bs"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import projects from "../../utils/projects"
import ProjectItem from "./ProjectItem/ProjectItem"

const Project = () => {
	const [width, setWidth] = useState(0)
	const carousel = useRef()
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])


	return (
		<div className="row py-5" id="projects">
			<div className="col-12">
				<h1 className="little-title ps-5 w-700">MY PROJECTS</h1>
				<img src={line} alt="small-line" className="img-fluid ps-5" />
				<h3 className="ps-5 sub-heading">
					Some of my latest work <br /> that makes me proud
				</h3>
				{/* <div className="filter-container ms-5 mt-2 sub-heading">
					<span className="pointer">All</span> /{" "}
					<span className="pointer">Tech</span> /{" "}
					<span className="pointer">Archi</span> /{" "}
					<span className="pointer">Consultant</span> /{" "}
					<span className="pointer">Mentorship</span>
				</div> */}
			</div>
			{/* work item start*/}
			<div className="col-xl-10 col-lg-11 col-md-11 col-sm-12 mt-3 mx-auto carousel-container position-relative">
				<BsFillCaretLeftFill className="position-absolute top-50 start-0 translate-middle fs-2 maroon-text" />
				<motion.div
					className="carousel"
					ref={carousel}
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="work-inner-slide"
					>
						{projects.map((project, index) => {
							return (
								<motion.div className="item" key={index}>
									<ProjectItem {...project} />
								</motion.div>
							)
						})}
					</motion.div>
				</motion.div>
				<BsFillCaretRightFill className="position-absolute top-50 start-100 translate-middle fs-2 maroon-text" />
			</div>
			{/* work item end */}
		</div>
	)
}

export default Project
