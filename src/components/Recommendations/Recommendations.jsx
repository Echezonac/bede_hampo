import "./Recommendations.css";
import { useState } from "react";
import Card from "./Card/WorkCard";
import recommendations from "../../utils/recommendations";

const Recommendations = () => {
	return (
		<div className='container'>
			<div
				className='row mt-custom py-5 '
				id='recommendation'
			>
				<div className='col-12 mb-5'>
					<h2 className='text-light mb-4'>
						Recommendations from the Pros
					</h2>
					<h4 className='text-light'>
						Here's what some of them are saying.
					</h4>
				</div>
				<div className='col-12'>
					<div className='row'>
						{recommendations.map(
							(item, index) => (
								<Card
									key={index}
									item={item}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommendations;
