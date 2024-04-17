import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuButtonWideFill } from "react-bootstrap-icons";
import brand from "../../assets/images/logo.png";
import "./Header.css";
import { navList } from "../../utils/navlist";
import { useState, useEffect } from "react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () =>
			window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
	};

	return (
		<div
			className='row mt-0'
			style={{ marginBottom: "5vh" }}
		>
			<nav
				className={`col-12  navbar navbar-expand-lg fixed-top px-3 py-3 bg-${
					isScrolled ? "black" : ""
				}`}
			>
				<div className='container-fluid'>
					<AnchorLink href='#hero' className='navbar-brand'>
						<span className='lh-sm fs-4  ms-2 text-light'>
							#Bede E. Hampo
						</span>
					</AnchorLink>

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo02'
						aria-controls='navbarTogglerDemo02'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<MenuButtonWideFill className='text-light fs-5' />
						{/* <span className="navbar-toggler-icon"></span> */}
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarTogglerDemo02'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0 mx-auto'>
							{navList.map((nav, index) => (
								<li
									key={index}
									className='nav-item active mx-2'
									data-bs-toggle='collapse'
									data-bs-target='#navbarTogglerDemo02'
								>
									<AnchorLink
										href={nav.link}
										className='nav-link text-light'
										aria-current='page'
									>
										{nav.name}
									</AnchorLink>
								</li>
							))}
						</ul>
						<form className='d-flex me-5' role='search'>
							<a
								href='tel:+2347065896334'
								className='nav-item btn btn-maroon fs-5'
							>
								Let's talk
							</a>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
