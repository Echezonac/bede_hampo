import "./Hero.css";
import "animate.css";
import SocialIcons from '../About/SocialIcons/SocialIcons';


const Hero = () => {
	return (
		<div className='container'>
			<div
				className='row hero-page custom-mx white-bg'
				id='hero'
			>
				<div className='col-xg-8 col-lg-8 col-md-12 col-sm-12 hero-container-content'>
					<div className='hero-content'>
						<h1 className='brand-title text-light m-0 p-0 animate__animated animate__backInLeft'>
							Bede E. Hampo
						</h1>
						<p className='text-light brand-text '>
							Engineer, Innovator, Mentor....
						</p>
						<SocialIcons />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero
