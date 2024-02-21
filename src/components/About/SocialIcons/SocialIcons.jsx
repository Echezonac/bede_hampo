import "./SocialIcons.css"
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Link } from "react-router-dom"

const SocialIcons = () => {
	return (
		<div className="m-0 p-0">
			<Link
				to="https://www.linkedin.com/in/hampoechebede"
				className="social-icon linkedin"
				target="_blank"
			>
				<BsLinkedin />
			</Link>
			<Link
				to="https://github.com/Echezonac"
				className="social-icon mx-3 github"
				target="_blank"
			>
				<BsGithub />
			</Link>
			<Link
				to="https://instagram.com/bede_hampo?igshid=MGNiNDI5ZTU="
				target="_blank"
				className="social-icon instagram"
			>
				<BsInstagram />
			</Link>
		</div>
	)
}

export default SocialIcons
