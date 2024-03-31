import "./Owlets.css";
import iconImg from "../../assets/images/knowledge-sharing.png";
import codeImg from "../../assets/images/code.png";

const Owlets = () => {
	return (
		<div className='container-fluid mt-custom py-5 '>
			<div
				className='row bg-maroon px-xl-5 px-lg-5 px-md-3 px-sm-0 py-5'
				id='owleets'
			>
				<div className='col-xl-9 col-lg-9 col-md-10 col-sm-12 mx-auto'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='page-title text-light pb-5'>
								Mastering comes from knowledge application...
							</h2>
						</div>
						<div className='col-12'>
							<div className='card'>
								<div className='row'>
									<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
										<img
											src={iconImg}
											alt='owleets'
											className='img-fluid'
											width={50}
											height={50}
										/>
										<h5 className='sub-title mt-5 mb-3'>
											Experiential Learning for Software
											Engineers
										</h5>
										<p className=''>
											We provide junior software engineers
											with the opportunity to contribute to
											real-world projects from day one.
											They'll gain valuable experience using
											industry-standard practices alongside
											a supportive team of mentors. We're
											committed to helping them grow their
											skills and become successful software
											engineers.
										</p>
										<a
											href='https://www.linkedin.com/company/owleets/'
											target='_blank'
											className='d-block mb-3'
										>
											Find out more about owleets
											<i className='bi bi-arrow-up-right'></i>
										</a>
									</div>
									<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
										<img
											src={codeImg}
											alt='great_software_engineer'
											className='img-fluid rounded d-block mx-auto'
											// height={500}
											// width={500}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Owlets;
