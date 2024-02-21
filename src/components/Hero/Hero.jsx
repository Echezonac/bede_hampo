import "./Hero.css";
import hero_line from "../../assets/images/hero-line.svg";
import "animate.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialIcons from '../About/SocialIcons/SocialIcons';


const Hero = () => {
	const [heroWord, setHeroWord] = useState(0);
	const heroWords = [
		"Software Engineer",
		"Design Engineer",
		"Tech Mentor",
		"Life-Long Learner",
		"Technopreneur",
	];
	useEffect(() => {
		const interval = setInterval(() => {
			setHeroWord(
				(prevIndex) => (prevIndex + 1) % heroWords.length
			);
		}, 2000);
		return () => clearInterval(interval);
	}, [heroWords.length]);
	return (
		<div className='row hero-page white-bg' id='hero'>
			<div className='col-xg-6 col-lg-6 col-md-12 col-sm-12 hero-container-content'>
				<div className='hero-content'>
					<h1 className='hero-title text-light m-0 p-0'>
						Bede E. Hampo
					</h1>
					<p className='white-text m-0 p-0'>
						Engineer, Innovator, Mentor
					</p>
					<SocialIcons />
				</div>
			</div>
		</div>
	);
}

export default Hero
