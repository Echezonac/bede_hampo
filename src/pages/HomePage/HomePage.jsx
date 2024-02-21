import Hero from "../../components/Hero/Hero";
import Innovation from "../../components/Innovation/Innovation";
import About from "../../components/About/About";
import Owlets from '../../components/Owlets/Owlets';
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
	return (
		< >
			<Hero />
			<About />
			<Innovation />
			<Owlets />
		</>
	);
};

export default HomePage;
