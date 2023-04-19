import small_line from "../../assets/images/small-line.png"
import "./About.css"
import Skills from "./Skills/Skills"
import SocialIcons from "./SocialIcons/SocialIcons"

const About = () => {
	return (
		<div className="row py-5" id="about">
			<div className="col-12">
				<h1 className="little-title ps-5 w-700">ABOUT ME</h1>
				<img src={small_line} alt="small-line" className="img-fluid ps-5" />
				<h3 className="ps-5 sub-heading">
					I provide creative solutions
					<br /> for better experience.
				</h3>
			</div>
			<div className="col-12 about-page mt-5 ps-xl-5 ps-sm-0 py-5">
				<p className="about-content ms-xl-5 mx-sm-0 px-5 text-justify">
					Being a full-stack engineer, I have worked with front-end and back-end
					technologies. Programming languages are a strong suit of mine, and I
					have a solid understanding of web development concepts. Every project
					would benefit from my abilities to work with cross-functional teams
					and tackle challenging issues. I'm constantly looking for ways to
					advance your knowledge and skills thanks to my passion for learning
					and for remaining current with cutting-edge technologies.
					<br />
					<SocialIcons />
				</p>
			</div>
			<Skills />
		</div>
	)
}

export default About
