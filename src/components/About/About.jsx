// About.js
import React from "react";
import engImg from "../../assets/images/engineer.png";
import innImg from "../../assets/images/innovator.png";
import MentorImg from "../../assets/images/mentor.png";
import "./About.css";
import AboutItem from "./AboutItem";


const About = () => {
	return (
		<div className='container'>
			<div
				className='row mt-custom py-5 about-page bg-black'
				id='about'
			>
				{/* heading start */}
				<div className='col-12'>
					<h5 className='title text-light mb-4'>
						Creating solutions that are unique, futuristic,
						and sustainable.
					</h5>
				</div>
				{/* heading end */}
				<AboutItem
					imageSrc={engImg}
					title='Software Engineer'
					description='Building robust, scalable systems & streamlining ML workflows. Passionate about bridging dev & ops for efficient deployments & infrastructure. Seeking a team tackling cutting-edge challenges.'
					buttonText='View Profile'
					lgCol={12}
					bgColor='#A0153E'
					color='light'
					url='https://www.linkedin.com/in/hampoechebede/'
				/>
				<AboutItem
					imageSrc={innImg}
					title='Innovator'
					description='Creator of Tride, RoadBill, Soothe, PointSub, and BlackGold'
					buttonText='Learn More'
					lgCol={6}
					bgColor='#FFDADA'
					color='dark'
					url='#innovation'
				/>
				<AboutItem
					imageSrc={MentorImg}
					title='Mentor'
					description='Mentoring engineers on how to gain experience while learning.'
					buttonText='Learn More'
					lgCol={6}
					color='dark'
					url='#owleets'
				/>
			</div>
		</div>
	);
};

export default About;
