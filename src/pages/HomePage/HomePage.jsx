import Hero from "../../components/Hero/Hero";
import Innovation from "../../components/Innovation/Innovation";
import About from "../../components/About/About";
import Owlets from '../../components/Owlets/Owlets';
import Footer from "../../components/Footer/Footer";
import Recommendations from '../../components/Recommendations/Recommendations';
import Newsletter from '../../components/Newsletter/Newsletter';

const HomePage = () => {
	return (
		< >
			<Hero />
			<About />
			<Innovation />
			<Owlets />
			<Recommendations />
			<Newsletter />
		</>
	);
};

export default HomePage;
