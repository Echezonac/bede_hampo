import "./WorkCard.css"
import { useState } from "react"
import { motion } from "framer-motion"

const WorkCard = ({ label, description, h, id }) => {
	const [show, setShow] = useState(false)
	const handleShow = () => {
		setShow(() => !show)
	}

	return (
		<div className="p-2">
			<div
				className={`work-card p-3 work-card-height-${
					h === 1 ? "1" : "2"
				} work-card-${id}`}
			>
				<div className="work-card-content">
					<h4 className="sub-heading lh-base fs-4">{label}</h4>
					{show && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="little-title text-justify p-3 text-light mb-2"
							style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
						>
							{description}
						</motion.div>
					)}
					<button className="btn custom-btn" onClick={handleShow}>
						Learn More
					</button>
				</div>
			</div>
		</div>
	)
}

export default WorkCard
