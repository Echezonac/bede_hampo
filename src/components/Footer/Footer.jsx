import "./Footer.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTelephone } from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div className='row mt-custom py-5 footer bg-light '>
			<div className='col-12'>
				<div className='container'>
					<h1 className='py-3 footer-title'>
						Bede E. Hampo
					</h1>
					<p className='text-center'>
						Reach out to me
						<i className='bi bi-arrow-down-right'></i>
					</p>
				</div>
			</div>
			<div className='col-4'></div>
			<div className='col-4'></div>
			<div className='col-4'></div>
		</div>
	);
}

export default Footer
