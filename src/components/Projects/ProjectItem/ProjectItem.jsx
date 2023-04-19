import "./ProjectItem.css"
import { Link } from "react-router-dom"

const ProjectItem = ({ title, img, decription, category, url }) => {
	return (
		<div className="work-item">
			<img src={img} alt={title} />
			<h5 className="htitle fs-6 mt-3 d-flex align-items-center justify-content-between">
				<span className="little-title fw-bold">{title}</span>{" "}
				<small className="ms-5 btn btn-maroon text-light py-1 px-2 little-title">
					{category}
				</small>
			</h5>
			<p className="my-3">{decription.substring(0, 100)}</p>
			<Link
				to={url}
				className="maroon-text fw-bold text-center little-title fs-6 text-decoration-none d-block "
				target="_blank"
			>
				{category === "tech" ? "visit" : "view"}
			</Link>
		</div>
	)
}

export default ProjectItem
