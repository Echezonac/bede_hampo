import "./Footer.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTelephone } from "react-icons/bs"
import { Link } from "react-router-dom"

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div className='row mt-custom pt-5 footer bg-light'>
			<div className='col-12'>
				<div className='container'>
					<h1 className='pt-4 footer-title'>
						Bede E. Hampo
					</h1>
					<p className='text-center'>
						Reach out to me
						<i className='bi bi-arrow-down-right'></i>
					</p>
				</div>
			</div>
			<div className='col-4 bg-black social-card py-5'>
				<Link
					to='https://www.linkedin.com/in/hampoechebede'
					className='social-icon linkedin'
					target='_blank'
				>
					<BsLinkedin className='fs-1 text-light' />
				</Link>
			</div>
			<div className='col-4 bg-secondary social-card py-5'>
				<Link
					to='https://github.com/Echezonac'
					className='social-icon mx-3 github'
					target='_blank'
				>
					<BsGithub className='fs-1 text-light' />
				</Link>
			</div>
			<div className='col-4 bg-maroon social-card py-5'>
				<Link
					to='https://instagram.com/bede_hampo?igshid=MGNiNDI5ZTU='
					target='_blank'
					className='social-icon instagram'
				>
					<BsInstagram className='fs-1 text-light' />
				</Link>
			</div>
			<div className='col-12 bg-light copyright p-5'>
				<p className='fs-4'>
					Copyright @{year} bedehampo. All right reserved
				</p>
			</div>
		</div>
	);
}

export default Footer
