import AnchorLink from "react-anchor-link-smooth-scroll"
import { MenuButtonWideFill } from "react-bootstrap-icons"
import brand from "../../assets/images/logo.png"
import "./Header.css"

const Header = () => {
	return (
		<div className="row " style={{ marginBottom: "5vh" }}>
			<nav className="col-12 navbar navbar-expand-lg fixed-top px-3 py-3 bg-body-tertiary">
				<div className="container-fluid">
					<AnchorLink href="#hero" className="navbar-brand text-danger">
						<span className="sub-heading lh-sm fs-5 maroon-text ms-2">
							#Bede E. Hampo
						</span>
					</AnchorLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<MenuButtonWideFill />
						{/* <span className="navbar-toggler-icon"></span> */}
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
							<li
								className="nav-item active mx-2"
								data-bs-toggle="collapse"
								data-bs-target="#navbarTogglerDemo02"
							>
								<AnchorLink
									href="#about"
									className="nav-link nav-link-custom"
									aria-current="page"
								>
									About me
								</AnchorLink>
							</li>
							<li
								className="nav-item mx-2"
								data-bs-toggle="collapse"
								data-bs-target="#navbarTogglerDemo02"
							>
								<AnchorLink
									href="#services"
									className="nav-link nav-link-custom"
									aria-current="page"
								>
									Services
								</AnchorLink>
							</li>
							<li
								className="nav-item mx-2"
								data-bs-toggle="collapse"
								data-bs-target="#navbarTogglerDemo02"
							>
								<AnchorLink
									href="#works"
									className="nav-link nav-link-custom"
									aria-current="page"
								>
									Projects
								</AnchorLink>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<a
								href="tel:+2347065896334"
								className="nav-item btn custom-btn mx-2"
							>
								Let's talk
							</a>
						</form>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
