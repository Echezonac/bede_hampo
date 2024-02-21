import "./OwletItem.css";
import img from "../../../assets/images/coming-soon.jpeg"

const OwletItem = ({
	item
}) => {

	return (
		<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 p-3'>
			<img
				src={item}
				alt='Owleets'
				className='card-content img-fluid'
			/>
		</div>
	);
};

export default OwletItem;
