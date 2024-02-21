import "./Innovation.css";
import InnovationItem from "./InnovationItem/InnovationItem";
import Innovations from "../../utils/innovations";
import { useState } from 'react';

const Innovation = () => {
	const [selectedItem, setSelectedItem] = useState(
		Innovations[0]
	);
	const handleItemClick = (item) => {
		setSelectedItem(item);
	};
	return (
		<div className='row py-5 px-custom' id='innovation'>
			{/* heading start */}
			<div className='col-12'>
				<div className='row'>
					{/* section title  start*/}
					<div className='col-xl-6 col-lg-6 col-md-3 col-sm-12 mb-2'>
						<h3 className='hero-title fs-3'>
							Innovations
						</h3>
					</div>
					{/* section title end */}
					{/* section menu start*/}
					<div className='col-xl-6 col-lg-6 col-md-9 col-sm-12 d-flex justify-content-center align-items-center'>
						<ul
							className='my-auto mx-auto d-flex align-items-around'
							style={{ width: "fit-content" }}
						>
							{Innovations.map((menu, index) => (
								<li key={index} className='px-2'>
									<p
										onClick={() => handleItemClick(menu)}
										className='text-decoration-none text-dark text-center'
									>
										{menu.name}
									</p>
								</li>
							))}
						</ul>
					</div>
					{/* section menu end */}
				</div>
			</div>
			{/* heading end */}
			{/* content start */}
			<div className='col-12 mt-3'>
				{Innovations.map((item, index) => (
					<div
						className='row my-3'
						style={{
							display:
								selectedItem.id === item.id
									? "flex"
									: "none",
						}}
					>
						<InnovationItem item={item} key={index} />
					</div>
				))}
			</div>
			{/* content end */}
		</div>
	);
};

export default Innovation;
