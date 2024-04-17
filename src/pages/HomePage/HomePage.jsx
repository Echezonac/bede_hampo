import Hero from "../../components/Hero/Hero";
import Innovation from "../../components/Innovation/Innovation";
import About from "../../components/About/About";
import Owlets from '../../components/Owlets/Owlets';
import Recommendations from '../../components/Recommendations/Recommendations';


const HomePage = () => {
	return (
		< >
			<Hero />
			<About />
			<Innovation />
			<Owlets />
			<Recommendations />
		</>
	);
};

export default HomePage;
